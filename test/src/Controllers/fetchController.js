const request = require('request');
const path = require('path');

exports.fetchWorld = function (req, res, next) {
  let ops = {
    url: `https://api.genius.com/search?q=Kendrick%20Lamar`,
    headers: {
      Authorization: 'Bearer j4DQ4ILmQIj07lZA6P_j_2ZjTrG_db2Bxg2aIvLN7tVaq0UxgSgqh8He1T3o28UM',
      Accept: 'application/json',
    }
  }

  request.get(ops, (error, response) => {
    let body = JSON.parse(response.body)
    // console.log(body.response.songs)
    res.status(200).json(body.response.hits[0].result)
  })
}
