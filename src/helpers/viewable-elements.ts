const DESKTOP_VIEWABLE = 20

export const getViewableElements = (height: number, width: number) => {
  if (width > 1024) {
    // fixed size of DESKTOP_VIEWABLE for desktop screens
    return DESKTOP_VIEWABLE
  } else {
    // if mobile, calculate viewable elements
    // based on height of remaining screen
    const vmin = Math.min(height, width)
    const elementHeight = 40
    return Math.ceil((height - 10 - vmin) / elementHeight)
  }
}
