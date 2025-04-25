export const IMAGE_PREVIEW_GRID = {
  EMPTY_TEXT: 'No images selected.',
  REMOVE_BUTTON: {
    TITLE: 'Remove',
    ARIA_LABEL: (index: number) => `Remove image ${index + 1}`,
  },
  IMAGE_ALT: (index: number) => `preview-${index}`,
}
