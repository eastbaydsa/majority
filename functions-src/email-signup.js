const axios = require('axios')

const endpoint = 'https://www.eastbaydsa.org/external/signup-majority.json'

success = callback => {
  callback(null, {
    statusCode: 200,
    body: 'Success',
  })
}

error = callback => {
  callback(null, {
    statusCode: 500,
    body: 'Error',
  })
}

exports.handler = ({ body }, context, callback) => {
  const { email, firstName, lastName } = JSON.parse(body)

  const payload = {
    email: email,
    first_name: firstName,
    last_name: lastName,
  }

  axios
    .post(endpoint, payload)
    .then(res =>
      res.status >= 200 && res.status < 300
        ? success(callback)
        : error(callback)
    )
    .catch(() => error(callback))
}
