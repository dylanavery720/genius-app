const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const router = require('./router');
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import songs from './Reducers/songs-reducer'
import router from './index.js';
import './index.css';
import MySongsContainer from './Containers/MySongsContainer'
import SongCardsContainer from './Containers/SongCardsContainer'

const oauth = {
  clientId: "uY-l55ombZgi1T9IF1Jl5Cb3wGZqw9uC444WRPHPK6TOu6aIFELNvtIZA3HWqngr",
 redirectUri: "http://localhost:9000/test",
 scope: "vote create_annotation manage_annotation me",
 clientSecret: process.env.GENIUS_CLIENT_SECRET
}
app.use(handleRender)
router(app)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
function handleRender(req, res) {
 const store = createStore(songs)
 const html = renderToString(
   router
 )
 const preloadedState = store.getState()
 res.send(renderFullPage(html, preloadedState))
}
function renderFullPage(html, preloadedState) {
  return
  <!doctype html>
<html>
  <head>
    <title>Rap Genius Genius</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script src="/static/bundle.js"></script>
  </body>
</html>
}

app.get('/', (request, response, next) => {
  let authUrl = `https://api.genius.com/oauth/authorize?client_id=${oauth.clientId}&redirect_uri=${oauth.redirectUri}&scope=${oauth.scope}&state=&response_type=code`
  response.redirect(authUrl)
})

app.get('/test', (req, res, next) => {
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

  request.post(options, (error, response) => {
    console.log('status code:', response.statusCode)
    if (response.statusCode > 399) {
      console.log('error', error)
    } else {
      console.log(response.statusCode)
      let body = JSON.parse(response.body)
      console.log(body.access_token)
    }
  })

// move this into fetchController andmake access_token dynamic?

app.use(express.static(path.resolve(__dirname, '..', 'build')));
res.sendFile(path.join(__dirname, '..', '/build', 'index.html'));
})
app.get('*', (req,res) => {
   res.sendFile(path.join(__dirname, '..', '/build', 'index.html'))
 })
app.listen(9000, () => {
  console.log('go to http://localhost:9000/ and authenticate. Your access token will then appear in this console.')
})
