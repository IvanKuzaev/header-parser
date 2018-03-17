// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

app.get("/api/whoami", (request, response) => {
  var reIP = /^(\d?\d?\d\.\d?\d?\d\.\d?\d?\d\.\d?\d?\d),.*/;
  reIP.test(request.headers['x-forwarded-for']);
  var ip = RegExp.$1;
  
  var reLanguage = /^(\w+-\w+),.*/;
  reLanguage.test(request.headers['accept-language']);
  var language = RegExp.$1;

  var reSoftware = /^[^()]*\(([^)]+)\).*/g;
  reSoftware.test(request.headers['user-agent']);
  var software = RegExp.$1;

  var o = { 'ipadress': ip, 'language': language, 'software': software };
  
  response.send(o);
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
