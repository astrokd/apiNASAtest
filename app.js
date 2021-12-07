const https = require('https');
require('dotenv').config()

const apiKey = process.env.API_KEY1
const apiURL = process.env.API_URL_NEO_FEED
const startDate = '2021-12-06'
const endDate = '2021-12-07'

https.get(`${apiURL}?start_date=${endDate}&end_date=${startDate}&api_key=${apiKey}`, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  })
  response.on('end', () => {
    const obj = JSON.parse(data)
    console.log(JSON.stringify(obj, null, 4));
  })
})
.on('error', (error) => {
  console.log(error);
})