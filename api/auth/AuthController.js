// AuthController.js
let User = require('../user/User')
let jwt = require('jsonwebtoken')
let config = require('../../config')

const tokenForUser = (user) => {
  return jwt.sign({ sub: user._id }, config.secret, {
    expiresIn: 86400 // expires in 24 hours
  })
}

exports.register = (req, res, next) => {
  let email = req.body.email
  let name = req.body.name
  let password = req.body.password

  User.findOne({email: { $in: [email] }}, (err, existingUser) => {
    if (err) { return next(err) }
    if (existingUser) {
      return res.status(422).send({ error: 'Email already exists.' })
    }

    User.create({
      name,
      email,
      password
    },
    (err, user) => {
      if (err) return res.status(500).send('There was a problem registering the user.')
      // create a token
      res.send({ token: tokenForUser(user) })
    })
  })
}

exports.login = (req, res) => {
  res.send({ token: tokenForUser(req.user) })
}

exports.user_info = (req, res) => {
  let tmpUser = req.user
  tmpUser.password = null
  res.send(tmpUser)
}