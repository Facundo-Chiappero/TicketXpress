export function emailBody({amount, name}: {amount: number, name: string}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9f9f9; border-radius: 8px;">
      <h2 style="color: #2c3e50;">Thank you for your purchase! 🎉</h2>
      <p style="font-size: 16px; color: #333;">
        ${name}, We have received your payment of <strong>${amount} ARS</strong>. We're happy to have you join us for this event.
      </p>

      <div style="text-align: center; margin: 32px 0;">
        <img 
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Fake%20Project%20Next.js" 
          alt="Fake QR code" 
          style="border: 1px solid #ccc; border-radius: 4px;" 
        />
        <p style="font-size: 14px; color: #888; margin-top: 8px;">This QR code doesn't lead anywhere 😅</p>
      </div>

      <p style="font-size: 14px; color: #666;">
        🧪 This is a 100% test project, created for educational purposes to learn Next.js and modern web development tools.
      </p>
    </div>
  `
}
