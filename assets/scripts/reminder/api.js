const config = require('./../config')
const store = require('./../store')

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

module.exports = {
  create
  // index,
  // show,
  // update,
  // destroy
}
