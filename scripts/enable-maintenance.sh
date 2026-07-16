#!/bin/bash
if [ -f "index.html.bak" ]; then
  echo "Maintenance already enabled."
  exit 1
fi
mv index.html index.html.bak
mv maintenance.html index.html
git add index.html index.html.bak
git commit -m "Enable maintenance page"
git push
