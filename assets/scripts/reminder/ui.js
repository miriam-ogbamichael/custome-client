'use strict'
// const store = require('./../store')

const onCultivateCreateSuccess = function (response) {
  $('#reminder-message').text('You have successfully created a reminder!')

  $('form').trigger('reset')

  $('#cultivate-create-form').show()
  $('#cultivate-index-form').show()
  $('#cultivate-update-form').hide()
  $('#cultivate-delete-form').hide()
}

const onCultivateCreateFailure = function () {
  $('#reminder-message').text('Error occured when creating a reminder.')

  $('form').trigger('reset')
}

const onCultivateIndexSuccess = function (res) {
  $('#reminder-message').text('You have successfully shown reminders!')
  const reminders = res.reminders
  $('#cultivate-reminder-display').html('')

  reminders.forEach(function (currentReminder) {
    const reminderHTML = (`
      <h4>Title: ${currentReminder.title}</h4>
      <p>Reminder: ${currentReminder.reminder}</p>
      <p>ID: ${currentReminder._id}</p>
      <br>
      `)
    $('#cultivate-reminder-display').append(reminderHTML)
  })

  $('form').trigger('reset')

  $('#cultivate-create-form').show()
  $('#cultivate-index-form').show()
  $('#cultivate-update-form').show()
  $('#cultivate-delete-form').show()
}

const onCultivateIndexFailure = function () {
  $('#reminder-message').text('Error occured with showing reminders.')

  $('form').trigger('reset')
}

const onCultivateUpdateSuccess = function (data) {
  $('#reminder-message').text('Click "Get Reminders" to see your updated reminders!')

  $('form').trigger('reset')
  $('#reminder-message').show()
}

const onCultivateUpdateFailure = function () {
  $('#reminder-message').text('Error occured when updating a reminder.')
  $('form').trigger('reset')
}

const onCultivateDeleteSuccess = function (data) {
  $('#reminder-message').text('Click "Get Reminders" to see your updated reminders!')

  $('form').trigger('reset')
}

const onCultivateDeleteFailure = function () {
  $('#reminder-message').text('Error occured when deleting a reminder.')

  $('form').trigger('reset')
}

module.exports = {
  onCultivateCreateSuccess,
  onCultivateCreateFailure,
  onCultivateIndexSuccess,
  onCultivateIndexFailure,
  onCultivateUpdateSuccess,
  onCultivateUpdateFailure,
  onCultivateDeleteSuccess,
  onCultivateDeleteFailure
}
