#!/bin/bash

COUNT=1
while [  $COUNT -lt 3 ]; do
   curl -s https://www.cannabisreports.com/api/v1.0/dispensaries?page=$COUNT|jq '.'>> dispDB.JSON
   let COUNT++
done
