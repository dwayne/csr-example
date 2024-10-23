document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app")

  function render(pathname) {
    let templateId = "notfound"

    switch (pathname) {
      case "/csr-example/":
        templateId = "home"
        break
      case "/csr-example/about":
        templateId = "about"
        break
      case "/csr-example/login":
        templateId = "login"
        break
    }

    const template = document.getElementById(templateId)
    const content = template.content.cloneNode(true)

    container.replaceChildren(content)
  }

  // Detect when the history changes, for e.g. the Back button is pressed
  window.addEventListener("popstate", () => {
    render(window.location.pathname)
  })

  // Hijack clicks on anchor tags
  document.addEventListener("click", (event) => {
    if (
      // You clicked an anchor tag
      event.target.tagName === "A" &&
      // And, you're going to a page on this domain
      event.target.origin === window.location.origin
    ) {
      // Don't ask the web server for that resource
      event.preventDefault()

      // Update the browser's history
      window.history.pushState({}, "", event.target.href)

      render(event.target.pathname)
    }
  })

  // Figure out which template to render when the page is first loaded
  render(window.location.pathname)
})
