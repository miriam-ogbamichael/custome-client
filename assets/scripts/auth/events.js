// requires getFormFields file to be used in this file
const getFormFields = require('./../../../lib/get-form-fields')

// requires api file to be used in this file
const api = require('./api')
// requires ui file to be used in this file
const ui = require('./ui')

// SIGN UP event handler
const onSignUp = function (event) {
  console.log('onSignUp in events.js ran')
  // prevents default action of refreshing page
  event.prevenDefault()
  // send data from form to the API
  const data = getFormFields(event.target)

  api.signUp(data)
  // responsible for successful inputs
    .then(ui.signUpSuccess)
    // responsible for failed inputs
    .catch(ui.signUpFailure)
}

// SIGN IN event handler
const onSignIn = function (event) {
  console.log('onSignIn in events.js ran')
  // prevents default action of refreshing page
  event.prevenDefault()
  // send data from form to the API
  const data = getFormFields(event.target)

  api.signIn(data)
  // responsible for successful inputs
    .then(ui.signInSuccess)
    // responsible for failed inputs
    .catch(ui.signInFailure)
}

// CHANGE PASSWORD event handler
const onChangePassword = function (event) {
  console.log('onChangePassword in events.js ran')
  // prevents default action of refreshing page
  event.prevenDefault()
  // send data from form to the API
  const data = getFormFields(event.target)

  api.changePassword(data)
  // responsible for successful inputs
    .then(ui.changePasswordSuccess)
    // responsible for failed inputs
    .catch(ui.changePasswordFailure)
}

// SIGN OUT event handler
const onSignOut = function (event) {
  console.log('onSignOut in events.js ran')
  // prevents default action of refreshing page
  event.prevenDefault()
  // send data from form to the API
  const data = getFormFields(event.target)

  api.signOut(data)
  // responsible for successful inputs
    .then(ui.signOutSuccess)
    // responsible for failed inputs
    .catch(ui.signOutFailure)
}

const addHanlers = () => {
  console.log('addHanlers in events.js ran')
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-form').on('submit', onSignOut)
}

module.exports = {
  addHanlers
}
