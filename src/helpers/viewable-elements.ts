const DESKTOP_VIEWABLE = 20

export const getViewableElements = (height: number, width: number) => {
  const vmin = Math.min(height, width)
  let elementHeight = 40
  let panelHeight = 0.9 * vmin
  let elements = 0
  if (width > 1024) {
    // if desktop,  change element height based on panel height
    elements = Math.ceil(panelHeight / elementHeight)
    elementHeight = Math.ceil(panelHeight / elements)
  } else {
    // if mobile, calculate viewable elements
    // based on height of remaining screen
    panelHeight = Math.floor(height - 10 - vmin)
    panelHeight = Math.floor(panelHeight / elementHeight) * elementHeight
    elements = panelHeight / elementHeight
  }
  document.documentElement.style.setProperty('--element-height', `${elementHeight}px`)
  document.documentElement.style.setProperty('--panel-height', `${panelHeight}px`)
  return elements
}
