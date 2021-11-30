function horizontalScroll (e: WheelEvent, element: HTMLDivElement) {
  e.preventDefault()
  element.scrollLeft += e.deltaY
}

export {
  horizontalScroll
}
