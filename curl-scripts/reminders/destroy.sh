#!/bin/bash

curl "http://localhost:4741/reminders/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
