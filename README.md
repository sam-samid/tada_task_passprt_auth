# tada_task_passprt_auth
## Intro

- this endpoint to know users login profile (with access token store in json file not using db or auth login (jwt or other))
## Preparing

- cloning project
- npm install

## JSON File

- access_token.json
- users.json

## Simple Usage

- enpoint = $host/users/:id 
    - id is id user in users.jason
    - auth is bearer token, list token is in access_token.json

- usage curl
    curl --location --request GET 'http://localhost:8271/users/profiles' \
    --header 'Authorization: Bearer 11111' 