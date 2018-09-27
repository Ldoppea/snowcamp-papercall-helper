# Snowcamp - Papercall helper

A helper project allowing to list papercall submissions in different ways

## Getting Started

Retrieve your API key from your Papercall event : `https://www.papercall.io/events/<eventID>/apidocs`

Add your Papercall API key to `papercall-helper-server\src\papercall\papercall-api-key.js`

```javascript
module.exports = 'YOUR_API_KEY'
```

Run the server

```
cd papercall-helper-server

yarn

yarn start
```
Run the client

```
cd papercall-helper-client

yarn

yarn serve
```

Then open a browser at : http://localhost:8080/

## Build

In order to build a standalone binary.

Build the client

```
cd papercall-helper-client

yarn build
```

Copy `papercall-helper-client/dist/` content to `papercall-helper-server/src/vue-build/`

Build the server

```
cd papercall-helper-server

node .\pack-for-windows.js
```
or
```
cd papercall-helper-server

node .\pack-for-macos.js
```

Run the resulting executable

```
.\papercall-helper-win.exe --token  <YOUR_API_TOKEN>
```
or
```
.\papercall-helper-mac --token  <YOUR_API_TOKEN>
```
## Built With

* [Papercall](https://www.papercall.io/)
* [Vue](https://vuejs.org/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

