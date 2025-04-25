import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import { UPDATE_USER_FORM } from '@/constants/frontend/updateUserForm'
import { ERRORS } from '@/constants/backend/errors'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// magic bytes
const magicBytesMap: Record<string, number[]> = {
  jpg: [0xFF, 0xD8, 0xFF],
  jpeg: [0xFF, 0xD8, 0xFF],
  png: [0x89, 0x50, 0x4E, 0x47],
  webp: [0x52, 0x49, 0x46, 0x46],
}

function matchesMagicBytes(buffer: Buffer, expectedBytes: number[]) {
  return expectedBytes.every((byte, index) => buffer[index] === byte)
}

export async function POST(req: Request) {
  const formData = await req.formData()

  const file = formData.get(UPDATE_USER_FORM.INPUT_NAMES.FILE)

  if (!file) {
    return NextResponse.json({ error: ERRORS.UPDATE_IMAGE.NO_FILE }, { status: 400 })
  }

  if (!(file instanceof File)) {
    return NextResponse.json({ error: ERRORS.UPDATE_IMAGE.NOT_A_FILE }, { status: 400 })
  }

  // validate size
  const MAX_MB_SIZE = 5
  const MAX_SIZE = MAX_MB_SIZE * 1024 * 1024
  if (file.size > MAX_SIZE) {
    return NextResponse.json(
      { error: `${ERRORS.UPDATE_IMAGE.BIG_FILE} (${MAX_MB_SIZE}MB)` },
      { status: 400 }
    )
  }

  // validate extension allowed
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp']
  const fileExtension = file.name.split('.').pop()?.toLowerCase()
  if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
    return NextResponse.json(
      { error: ERRORS.UPDATE_IMAGE.INCORRECT_FORMAT },
      { status: 400 }
    )
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer())

    // validate magic bytes
    const expectedMagic = magicBytesMap[fileExtension]
    if (!expectedMagic || !matchesMagicBytes(buffer, expectedMagic)) {
      return NextResponse.json(
        { error: ERRORS.UPDATE_IMAGE.MISMATCH_EXTENSION_AND_BYTES },
        { status: 400 }
      )
    }

    // upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: 'image' }, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
        .end(buffer)
    })

    return NextResponse.json(result)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json(
      { error: ERRORS.UPDATE_IMAGE.UNEXPECTED },
      { status: 500 }
    )
  }
}
