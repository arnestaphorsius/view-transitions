window.addEventListener('pageswap', async (e) => {
  if (e.viewTransition) {
    const transitionType = determineTransitionType(e.activation.from, e.activation.entry)

    e.viewTransition.types.add(transitionType)
  }
})

window.addEventListener('pagereveal', async (e) => {
  if (e.viewTransition) {
    const transitionType = determineTransitionType(navigation.activation.from, navigation.activation.entry)

    e.viewTransition.types.add(transitionType)
  }
})

function grabPageIndex(pathname) {
  return pathname.endsWith('/') ? pathname.slice(pathname.length - 2, pathname.length - 1) : pathname.slice(pathname.length - 1)
}

function determineTransitionType(oldNavigationEntry, newNavigationEntry) {
  const currentURL = new URL(oldNavigationEntry.url)
  const destinationURL = new URL(newNavigationEntry.url)

  const currentPathname = grabPageIndex(currentURL.pathname)
  const destinationPathname = grabPageIndex(destinationURL.pathname)

  const currentPageIndex = Number.parseInt(currentPathname)
  const destinationPageIndex = Number.parseInt(destinationPathname)

  if (currentPageIndex > destinationPageIndex)
    return 'backwards'

  if (currentPageIndex < destinationPageIndex)
    return 'forwards'

  return 'unknown'
}
