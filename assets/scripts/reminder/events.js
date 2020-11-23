'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCultivateCreate = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCultivateCreateSuccess)
    .catch(ui.onCultivateCreateFailure)
}

const onCultivateIndex = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.index(data)
    .then(ui.onCultivateIndexSuccess)
    .catch(ui.onCultivateIndexFailure)
}

const onCultivateUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.update(data)
    .then(ui.onCultivateUpdateSuccess)
    .catch(ui.onCultivateUpdateFailure)
}

const onCultivateDelete = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.destroy(data)
    .then(ui.onCultivateDeleteSuccess)
    .catch(ui.onCultivateDeleteFailure)
}

const addHandlers = () => {
  $('#cultivate-create-form').on('submit', onCultivateCreate)
  $('#cultivate-index-form').on('submit', onCultivateIndex)
  $('#cultivate-update-form').on('submit', onCultivateUpdate)
  $('#cultivate-delete-form').on('submit', onCultivateDelete)
  $('#cultivate-create-form').hide()
  $('#cultivate-index-form').hide()
  $('#cultivate-update-form').hide()
  $('#cultivate-delete-form').hide()
}

module.exports = {
  addHandlers
}
