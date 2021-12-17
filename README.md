# apiNASAtest

api.nasa.gov Test sandbox repo

Example API call to NEO API:

[https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY](https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY)

`node app.js` calls the neo api for a start and end date that is the current date and creates a json file with what is returned.

obj keys: links,element_count,near_earth_objects
