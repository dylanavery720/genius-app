exports.helloworld = function(req, res, next) {
  res.status(200).json({
    message: 'hello'
  })
}

// (function (exports, require, module, __filename, __dirname) { export const helloworld = function(req, res, next)
