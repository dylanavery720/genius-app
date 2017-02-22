const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()

const oauth = {
  clientId: "uY-l55ombZgi1T9IF1Jl5Cb3wGZqw9uC444WRPHPK6TOu6aIFELNvtIZA3HWqngr",
 redirectUri: "http://localhost:9000/callback",
 scope: "vote create_annotation manage_annotation me",
 clientSecret: process.env.GENIUS_CLIENT_SECRET
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// app.use(function(req, res, next) { res.header('Access-Control-Allow-Origin', "*"); res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); res.header('Access-Control-Allow-Headers', 'Content-Type'); next();
// })

app.get('/test', (request, response, next) => {
  let authUrl = `https://api.genius.com/oauth/authorize?client_id=${oauth.clientId}&redirect_uri=${oauth.redirectUri}&scope=${oauth.scope}&state=&response_type=code`
  response.redirect(authUrl)
})

var apiKey;
app.get('/callback', (req, res, next) => {
  let options = {
    url: 'https://api.genius.com/oauth/token',
    form: {
      code: req.query.code,
      client_secret: process.env.GENIUS_CLIENT_SECRET,
      grant_type: 'authorization_code',
      client_id: oauth.clientId,
      redirect_uri: oauth.redirectUri,
      response_type: 'code'
    }
  }

// move this into fetchController andmake access_token dynamic?
  //
  request.post(options, (error, response) => {
    console.log('status code:', response.statusCode)
    if (response.statusCode > 399) {
      console.log('error', error)
    } else {
      console.log(response.statusCode)
      apiKey = JSON.parse(response.body).access_token
    }
  })

// move this into fetchController andmake access_token dynamic?
  res.redirect('/')
})

app.get('/api/key', (req, res) => {
  res.status(200).json({
    message: 'hello',
    data: apiKey
  })
})

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '..', '/build', 'index.html'))

 })
app.listen(9000, () => {
  console.log('go to http://localhost:9000/ and authenticate. Your access token will then appear in this console.')
})
