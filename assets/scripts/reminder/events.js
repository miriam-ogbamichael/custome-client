'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCultivateCreate = function (event) {
  console.log('onCultivateCreate ran', event)
  event.preventDefault()
  console.log('onCultivateCreate ran!')

  const data = getFormFields(event.target)
  console.log('data is ', event.target)
  api.create(data)
    .then(ui.onCultivateCreateSuccess)
    .catch(ui.onCultivateCreateFailure)
}

const onCultivateIndex = function (event) {
  event.preventDefault()
  console.log('onCultivateIndex ran!')

  const form = event.target
  console.log('index form ', form)
  const data = getFormFields(form)
  console.log('index data ', data)

  api.index(data)
    .then(ui.onCultivateIndexSuccess)
    .catch(ui.onCultivateIndexFailure)
}

const onCultivateUpdate = function (event) {
  event.preventDefault()
  console.log('onCultivateUpdate ran!')

  const form = event.target
  console.log('update form ', form)
  const data = getFormFields(form)
  console.log('update data ', data)

  api.update(data)
    .then(ui.onCultivateUpdateSuccess)
    .catch(ui.onCultivateUpdateFailure)
}

const onCultivateDelete = function (event) {
  event.preventDefault()
  console.log('onCultivateDelete ran!')

  const form = event.target
  console.log('delete form ', form)
  const data = getFormFields(form)
  console.log('delete data ', data)

  api.destroy(data)
    .then(ui.onCultivateDeleteSuccess)
    .catch(ui.onCultivateDeleteFailure)
}

const addHandlers = () => {
  $('#cultivate-create-form').on('submit', onCultivateCreate)
  $('#cultivate-index-form').on('submit', onCultivateIndex)
  $('#cultivate-update-form').on('submit', onCultivateUpdate)
  $('#cultivate-delete-form').on('submit', onCultivateDelete)
}

module.exports = {
  addHandlers
}
