const config = require('./../config')
const store = require('./../store')

// CREATE
// Lets user create a Reminder
const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reminders',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      title: data.title,
      reminder: data.reminder
    }
  })
}

// INDEX
// Lets user access all of their Reminders
const index = function (reminder) {
  return $.ajax({
    url: config.apiUrl + '/reminders',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// UPDATE
// Lets user update any of their Reminders
const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reminders/' + data.reminder.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

// DESTROY
// Lets user delete any of thier Reminders
const destroy = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reminders/' + data.reminder.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  // show,
  update,
  destroy
}
