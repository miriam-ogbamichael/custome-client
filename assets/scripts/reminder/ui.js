'use strict'
// const store = require('./../store')

const onCultivateCreateSuccess = function (response) {
  console.log('onCultivateCreateSuccess response ran ', response)
  $('#reminder-message').text('You have successfully created a reminder!')

  $('form').trigger('reset')
}

const onCultivateCreateFailure = function (error) {
  $('#reminder-message').text('Error occured when creating a reminder.')
  console.error('onCultivateFailure ran. Error is :', error)

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
}

const onCultivateIndexFailure = function (error) {
  $('#reminder-message').text('Error occured with showing reminders.')
  console.error('onCultivateIndexFailure ran. Error is :', error)

  $('form').trigger('reset')
}

const onCultivateUpdateSuccess = function (data) {
  console.log('onCultivateUpdateSuccess data ran ', data)
  $('#reminder-message').text('Click "Get Reminders" to see your updated reminders!')

  $('form').trigger('reset')
}

const onCultivateUpdateFailure = function (error) {
  $('#reminder-message').text('Error occured when updating a reminder.')
  console.error('onCultivateUpdateFailure ran. Error is :', error)

  $('form').trigger('reset')
}

const onCultivateDeleteSuccess = function (data) {
  console.log('onCultivateDeleteSuccess data ran ', data)
  $('#reminder-message').text('Click "Get Reminders" to see your updated reminders!')

  $('form').trigger('reset')
}

const onCultivateDeleteFailure = function (error) {
  $('#reminder-message').text('Error occured when deleting a reminder.')
  console.error('onCultivateDeleteFailure ran. Error is :', error)

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
