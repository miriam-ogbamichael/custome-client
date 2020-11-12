'use strict'

const onCultivateSuccess = function (data) {
  $('#message').text('A reminder to cultivate a mindset has been created')
  console.log()
}

const onCultivateFailure = function (error) {
  $('#message').text('Error on creating a reminder to cultivate a mindset')
  console.error('onCultivateFailure ran. Error is :', error)
}

module.exports = {
  onCultivateSuccess,
  onCultivateFailure
}
