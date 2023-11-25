#!/bin/bash 

email=$1
PROJECT_PATH=".\jellyfin-web-testing"

# build_comand=''
test_command='npm run test'

# Install test dependencies 
# npm install -D vitest
# npm install jsdom
# npx update-browserslist-db@latest
# npm i -D @vitest/coverage-v8

# Build Software Under Test 
# echo "Building Software Under Test..."
# cd $PROJECT_PATH
# npm start
# npm run build:development 

# Run Test Code via script 
echo "Running test code..."
# cd $PROJECT_PATH
# #$test_command

check whether all tests passed 
if [ $test_command -eq 0 ]; then
    TEST_PASS='True'
else 
    TEST_PASS='False'

# email the status of build and tests to the specified email address using curl
echo "Sending email to $email..."

curl --url 'smtps://smtp.gmail.com:465' --ssl-reqd \
  --mail-from "$email" \
  --mail-rcpt 'easinemily@gmail.com' \
  --user "$email"':password' \
  -T <(echo -e "From: emilysoolee@gmail.com\nTo: easinemily@gmail.com\nSubject: Status:\n\nBuild Result: $BUILD_RESULT, Test Result: $TEST_RESULT")

echo "Status email sent."

# Exit the script
exit