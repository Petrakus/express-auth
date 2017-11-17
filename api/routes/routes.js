const controllers = require('../controllers')
const passportConfig = require('../services/passport')
const passport = require('passport')

const AUTH_CONTEXT = '/api/auth'

const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', { session: false })

module.exports = (app) => {
  app
    .route(`${AUTH_CONTEXT}/register`)
    .post(controllers.auth.register)

  app
    .route(`${AUTH_CONTEXT}/login`)
    .post(requireLogin, controllers.auth.login)

  app
    .route(`${AUTH_CONTEXT}/me`)
    .get(requireAuth, controllers.auth.user_info)

  app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
  })
}
