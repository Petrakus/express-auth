const auth = require('../auth/AuthController')
const passportConfig = require('../services/passport')
const passport = require('passport')

const AUTH_CONTEXT = '/api/auth'

const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', { session: false })

module.exports = (app) => {
  app
    .route(`${AUTH_CONTEXT}/register`)
    .post(auth.validateParamsType, auth.register)

  app
    .route(`${AUTH_CONTEXT}/login`)
    .post(auth.validateParamsType, requireLogin, auth.login)

  app
    .route(`${AUTH_CONTEXT}/me`)
    .get(requireAuth, auth.user_info)

  // Error handling middleware.
  app.use((err, req, res, next) => {
    res.status(500).send({error: err.message})
  })

  app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
  })
}
