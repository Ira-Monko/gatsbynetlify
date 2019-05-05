const axios = require('axios')

exports.handler = function(event, context, callback) {
  const parsedBody = JSON.parse(event.body)
  console.log(parsedBody)
  axios({
    method: 'post',
    url: 'https://postb.in/G061rKSU',
    data: { name: parsedBody.name },
  })
    .then(response => {
      //console.log(response)
      callback(null, {
        statusCode: 200,
        body: 'Yay!',
      })
    })
    .catch(err => {
      console.log(err)
      callback(new Error('Something went wrong'))
    })
}
