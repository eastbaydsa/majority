import axios from 'axios';

export default function callLambdaFunction(functionName, body) {
  return axios.post(`/.netlify/functions/${functionName}`, body);
}