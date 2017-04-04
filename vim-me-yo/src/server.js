const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const cors = require('cors')

let apiKey;

const oauth = {
  clientId: '50c84f82fb4ac0e63c1b94c968aea70558738f33',
  redirectUri: 'http://localhost:9000/',
  scope: 'vote create_annotation manage_annotation me',
  clientSecret: process.env.ARTSY_CLIENT_SECRET,
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '..', 'build')));


// app.get('/test', (request, response, next) => {
//   const authUrl = `https://api.vimeo.com/oauth/authorize?client_id=${oauth.clientId}&response_type=code&redirect_uri=${oauth.redirectUri}&state=90059`
//   response.redirect(authUrl)
// })


app.get('/test', (req, res, next) => {
  const options = {
    url: 'https://api.artsy.net/api/tokens/xapp_token',
    form: {
      client_secret: process.env.ARTSY_CLIENT_SECRET,
      client_id: '41fe04bd2b44a862c2a9',
      redirect_uri: oauth.redirectUri,
    },
  }
  axios.post('https://api.artsy.net/api/tokens/xapp_token', {
    client_secret: process.env.ARTSY_CLIENT_SECRET,
    client_id: '41fe04bd2b44a862c2a9',
  })
  .then((response) => {
    console.log(response.data.token)
    apiKey = response.data.token
  })
  .catch((error) => {
    console.log(error)
  })
  res.redirect('/')
})

app.get('/api/key', (req, res) => {
  res.status(200).json({
    message: 'hello',
    data: apiKey,
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/build', 'index.html'))
})

app.listen(9000, () => {
  console.log("listening at 9000")
})
