// imports data stored in the store.js file to be used in this ui.js file
const store = require('./../store')

// Gives the user a message indicating that they've signed up successfully
const signUpSuccess = function (response) {
  // actual text user see's in broswer
  $('#message').text('Thanks ' + response.user.email + ', you have sign up successfully!')

  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')

  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
}

// Gives the user a message indicating that an error has occured with their sign up
const signUpFailure = function () {
  // actual text user see's in broswer
  $('#message').text('Oops, there is an error with your sign up.')

  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')
}

// Gives the user a message indicating that they've signed in successfully
const signInSuccess = function (response) {
  // actual text user see's in broswer
  $('#message').text('You have signed in successfully, ' + response.user.email + ' !')

  // stores user's sign in data in store.js to be used for future authentication requests
  store.user = response.user
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')

  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#sign-out-form').show()
}

// Gives the user a message indicating that an error has occured with their sign in
const signInFailure = function () {
  // actual text user see's in broswer
  $('#message').text('Oops, there is an error with your sign in.')

  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')
}

// Gives the user a message indicating that they've changed their password successfully
const changePasswordSuccess = function () {
  // actual text user see's in broswer
  $('#message').text('You have changed your password successfully!')

  // claears the form of any data the user populated with to submit the change password form.
  $('form').trigger('reset')
}

// Gives the user a message indicating that an error has occured with their password change attempt
const changePasswordFailure = function () {
  // actual text user see's in broswer
  $('#message').text('Oops, there is an error with your password change.')

  // claears the form of any data the user populated with to submit the change password form.
  $('form').trigger('reset')
}

// Gives the user a message indicating that they've signed out successfully
const signOutSuccess = function () {
  // actual text user see's in broswer
  $('#message').text('See you later!')

  // removes stored data and signs them out
  store.user = null
  // claears the form of any data the user populated with to submit any authentication requests they used.
  $('form').trigger('reset')
}

// Gives the user a message indicating that an error has occured with their sign out
const signOutFailure = function () {
  // actual text user see's in broswer
  $('#message').text('Oops, there is an error with your sign out.')

  // claears the form of any data the user populated with to submit all authentication requests they used, sign in and sign up.
  $('form').trigger('reset')
}

// exports all contents of this file to be used in other files
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
