'use strict'

const onCultivateSuccess = function (data) {
  console.log('onCultivateSuccess data ran ', data)
  $('#cultivate-create-message').html('You have successfully created a reminder to cultivate a mindset!')
  if (!($('#reminder-display').html() === '')) {
    $('#reminder-display').html('Cultivate a Mindset has now changed! Click on "View All" again to see all the reminders in your Cultivate a Mindset.')
  }
}

const onCultivateFailure = function (error) {
  $('#cultivate-create-message').text('Error on creating a reminder to cultivate a mindset')
  console.error('onCultivateFailure ran. Error is :', error)
}

module.exports = {
  onCultivateSuccess,
  onCultivateFailure
}
