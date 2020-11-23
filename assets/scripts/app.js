'use strict'

const authEvents = require('./auth/events')
const reminderEvents = require('./reminder/events')

$(() => {
  authEvents.addHandlers()
  reminderEvents.addHandlers()
})
