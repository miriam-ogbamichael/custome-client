const config = require('./../config')
const store = require('./../store')

// CREATE
// Lets user create a Reminder
const create = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/reminders',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

// INDEX
// Lets user access all of their Reminders
const index = function (reminder) {
  console.log('reminder: ', reminder)
  return $.ajax({
    url: config.apiUrl + 'reminders/' + reminder.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// SHOW
// Lets user see one of their reminders
const show = function (reminder) {
  console.log('reminder: ', reminder)
  return $.ajax({
    url: config.apiUrl + '/reminders' + reminder.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// UPDATE
// Lets user update any of their Reminders
const update = function (data) {
  console.log('data: ', data)
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
const destroy = function (id) {
  console.log('id: ', id)
  return $.ajax({
    url: config.apiUrl + '/reminders/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  show,
  update,
  destroy
}
