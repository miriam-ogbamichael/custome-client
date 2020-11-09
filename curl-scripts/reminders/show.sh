#!/bin/sh

curl "http://localhost:4741/reminders/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
