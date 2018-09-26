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

## Built With

* [Papercall](https://www.papercall.io/)
* [Vue](https://vuejs.org/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

