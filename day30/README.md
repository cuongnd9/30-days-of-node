# url-shortener

> 🙌 Build a URL Shortener with Node.js and MongoDB.

## Quick start

```bash
// Install dependencies for server
$ cd server && yarn

// Install dependencies for client
$ cd client && yarn

// Run server
$ cd server && yarn start

// Run client
$ cd client && yarn start
```
Config `nginx`: `/etc/nginx/sites-enabled/default`

```
server {
  listen 80;
  index index.html;
  server_name cuongw;
  rewrite ^/(.*)$ https://github.com/cuongw/url-shortener redirect;
}
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://cuongw.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Code">💻</a> <a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Documentation">📖</a> <a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Tests">⚠️</a> <a href="#review-cuongw" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [cuongw](https://github.com/cuongw)
