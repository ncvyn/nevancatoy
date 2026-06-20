document.addEventListener('DOMContentLoaded', () => {
  const transitionOverlay = document.getElementById('transition-overlay')
  const navLinks = document.querySelectorAll(
    '.flex.flex-col a'
  ) as NodeListOf<HTMLAnchorElement>

  if (transitionOverlay) {
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault()
        transitionOverlay.classList.remove('opacity-0', 'pointer-events-none')
        transitionOverlay.classList.add('opacity-100')

        setTimeout(() => {
          window.location.href = link.href
        }, 500)
      })
    })
  }
})
