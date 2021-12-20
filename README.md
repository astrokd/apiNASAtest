# apiNASAtest

api.nasa.gov Test sandbox repo

Example API call to NEO API:

[https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY](https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY)

`node app.js` calls the neo api for a start and end date that is the current date and creates a json file with what is returned.

obj keys:

- links
  - next
  - prev
  - self
- element_count
- near_earth_objects - {Date of neo YYYY-MM-DD}
  - links
    - self
  - id
  - neo_reference_id
  - name
  - nasa_jpl_url
  - absolute_magnitude_h
  - estimated_diameter
    - kilometers
      - estimated_diameter_min
      - estimated_diameter_max
    - meters
    - miles
    - feet
  - is_potentially_hazardous_asteroid
  - close_approach_data
    - close_approach_date
    - close_approach_date_full
    - epoch_data_close_approach
    - relative_velocity
      - kilometers_per_second
      - kilometers_per_hour
      - miles_per_hour
    - miss_distance
      - astronomical
      - lunar
      - kilometers
      - miles
    - orbiting_body
  - is_sentry_object
