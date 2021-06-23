# tada_task_passprt_auth

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
    curl --location --request GET 'http://localhost:8271/users/3' \
    --header 'Authorization: Bearer 11111' 