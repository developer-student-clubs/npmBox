
# axios

## What is axios ?

- Axios is a [promise-based](https://javascript.info/promise-basics) HTTP Client for `node.js` and the browser. It is [isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application) (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js `http` module, while on the client (browser) it uses XMLHttpRequests.

## Installing

Using npm:

```bash
$ npm install axios
```

Using bower:

```bash
$ bower install axios
```

Using yarn:

```bash
$ yarn add axios
```

Using pnpm:

```bash
$ pnpm add axios
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
```

## Features

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Make [http](https://nodejs.org/api/http.html) requests from node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- 🆕 Automatic data object serialization to `multipart/form-data` and `x-www-form-urlencoded` body encodings
- Client side support for protecting against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
