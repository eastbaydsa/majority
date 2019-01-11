import axios from 'axios';

const uri = "https://jefflee.nationbuilder.com/api/v1/people/push";

exports.handler = async function nbPeoplePush({ body }, context, callback) {
  const { firstName, lastName, email } = JSON.parse(body);

  const data = {
    email: email,
    first_name: firstName,
    last_name: lastName,
    access_token: "ITS_YOUR_ACCESS_TOKEN"
  }

  console.log("------------------------------------------------------")
  console.log(data);
  console.log(body);

  const result = await axios.put(uri, data);
  callback(null, result);
}