'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCultivateCreate = function (event) {
  event.preventDefault()
  console.log('onCultivateCreate ran!')

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCultivateCreateSuccess)
    .catch(ui.onCultivateCreateFailure)
}

module.exports = {
  onCultivateCreate
}
