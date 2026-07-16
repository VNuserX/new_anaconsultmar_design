#!/bin/bash
if [ ! -f "index.html.bak" ]; then
  echo "Maintenance is not active."
  exit 1
fi
mv index.html maintenance.html
mv index.html.bak index.html
git add index.html maintenance.html
git commit -m "Disable maintenance page"
git push
