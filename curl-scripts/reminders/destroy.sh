#!/bin/bash

#!/ DESTROY request
#!/ DELETE: deletes a specific 'id''s reminders

curl "http://localhost:4741/reminders/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
