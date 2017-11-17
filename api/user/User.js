const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

let userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String, unique: true, lowercase: true
  },
  password: String
})

userSchema.pre('save', function (next) {
  // get access to the user model
  const user = this

  // generate salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }

    // generate hash password
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err) }

      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err) }

    callback(null, isMatch)
  })
}

let User = mongoose.model('User', userSchema)

module.exports = User
