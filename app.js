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
    const neoCount = obj.element_count
    const neoArray = Object.values(obj.near_earth_objects)[0] 

    neoArray.map(neo => {
      const name = neo.name
      const est_diamin = neo.estimated_diameter.kilometers.estimated_diameter_min
      const est_diamax = neo.estimated_diameter.kilometers.estimated_diameter_max
      const isHazard = neo.is_potentially_hazardous_asteroid
      // const approach_date = neo.close_approach_data[0].close_approach_date_full
      // const rel_vel = neo.close_approach_data[0].relative_velocity.kilometers_per_second
      const miss_dist = neo.close_approach_data[0].miss_distance.kilometers
      // const orb_body = neo.close_approach_data[0].orbiting_body
      // const isSentry = neo.is_sentry_object

      console.log(`neo name: ${name}, est dia(km): ${est_diamin} / ${est_diamax}, Hazard: ${isHazard}, miss distance(km): ${miss_dist}`)
    })

    console.log(`Data written to NEO file for ${startDate} contains ${neoCount} objects`);
  })
})
.on('error', (error) => {
  console.log(error);
})