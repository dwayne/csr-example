# Client-side routing example - [Live Demo](https://csr-example.netlify.app/)

A simple demonstration of client-side routing.

## Usage

```bash
devbox shell
caddy run
```

Then, go to `http://localhost:3000` and click around.

### Notes

Try going directly to one of the other pages:

- `http://localhost:3000/about`
- `http://localhost:3000/login`

Do you understand why it loads the `index.html` file and renders a different view?

Think about why you're still able to load `http://localhost:3000/index.js` from the web server.

## GitHub Pages and Netlify

The website is hosted on GitHub Pages and Netlify:

- https://dwayne.github.io/csr-example/
- https://csr-example.netlify.app/

Notice how you can't go directly to the about or login page with the GitHub Pages hosted site but, with the Netlify hosted site, you can.

See for yourself:

- https://dwayne.github.io/csr-example/about
- https://csr-example.netlify.app/about

## Resources

- [try_files](https://caddyserver.com/docs/caddyfile/directives/try_files)
- [History `pushState` and single-page apps](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)
