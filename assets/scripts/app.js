'use strict'

const authEvents = require('./auth/events')
// const reminderEvents = require('./reminder/events')

$(() => {
  authEvents.addHandlers()
  console.log('authEvents.addHanlers in app.js ran')
  // reminderEvents.addHandlers()
})
