const https = require('https');
require('dotenv').config()

const fs = require('fs')

const apiKey = process.env.API_KEY1
const apiURL = process.env.API_URL_NEO_FEED
const today = new Date()
// Date format is (yyyy-mm-dd) ie '2021-12-15' or '2022-01-02'
const month = today.getMonth()
const startDate = `${today.getFullYear()}-${month+1}-${today.getDate()}`
const endDate = startDate
const dateNow = Date.now()

https.get(`${apiURL}?start_date=${endDate}&end_date=${startDate}&api_key=${apiKey}`, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  })
  response.on('end', () => {
    const obj = JSON.parse(data)
    const jsondata = JSON.stringify(obj, null, 4)
    fs.writeFileSync(`NEO_${startDate}_${dateNow}`,jsondata)
    console.log(`Data written to NEO file for ${startDate}`);
  })
})
.on('error', (error) => {
  console.log(error);
})