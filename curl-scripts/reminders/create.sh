#!/bin/bash

curl "http://localhost:4741/reminders" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "reminder": {
      "title": "'"${TITLE}"'",
      "reminder": "'"${REMINDER}"'"
    }
  }'

echo
