const setItemClicked = (element) => {
  sessionStorage.setItem('clicked', element.id)
}

window.addEventListener('pageswap', async (e) => {
  if (e.viewTransition) {
    const clicked = sessionStorage.getItem('clicked')

    if (clicked) {
      let element = document.getElementById('image-container')

      if (element) {
        element.style["view-transition-name"] = clicked;
      }

      element = document.getElementById(clicked);

      if (element) {
        element.style["view-transition-name"] = clicked;
      }
    }
  }
})

window.addEventListener('pagereveal', (e) => {
  if (e.viewTransition) {
    const clicked = sessionStorage.getItem('clicked')

    if (clicked) {
      let element = document.getElementById('image-container')

      if (element) {
        element.style["view-transition-name"] = clicked;
      }

      element = document.getElementById(clicked);

      if (element) {
        element.style["view-transition-name"] = clicked;
      }
    }
  }
})