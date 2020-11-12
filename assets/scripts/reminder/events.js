'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCultivateReminder = function (event) {
  event.preventDefault()
  console.log('onCultivateReminder ran!')

  const data = getFormFields(event.target)
  api.cultivate(data)
    .then(ui.onCultivateSuccess)
    .catch(ui.onCultivateFailure)
}

const addHandlers = () => {
  $('#cultivate-reminder-form').on('submit', onCultivateReminder)
}

module.exports = {
  addHandlers
}
