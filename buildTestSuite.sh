# #!/bin/bash

# To make builTestSuite.sh an executable file, run chmod +x buildTestSuite.sh
# and ./buildTestSuite seattleu.team1@gmail.com to run script

email=$1
PROJECT_PATH=".\jellyfin-web-testing"

# Build Software Under Test
echo "Building Software Under Test..."
cd $PROJECT_PATH
npm run build:development

# Check building software under test was successful
if [ $? -eq 0 ]; then
    BUILD_SUCCESS='true'
else
    BUILD_SUCCESS='false'
fi

# Run Test Code via script
echo "Running test code..."
npm run test

# check whether all tests passed
if [ $? -eq 0 ]; then
    TEST_PASS='true'
else
    TEST_PASS='false'
fi

# Run UI test via script
#npm run test:UI

# check whether all UI tests passed
#if [ $? -eq 0 ]; then
#    UI_TEST_PASS='true'
#else
#    UI_TEST_PASS='false'
#fi

# email the status of build and tests to the specified email address using curl
echo "Sending email to $email..."

curl --url 'smtps://smtp.gmail.com:465' --ssl-reqd \
  --mail-from "$email" \
  --mail-rcpt 'emilysoolee@gmail.com' \
  --user 'seattleu.team1@gmail.com:onmb llqm soeq fdce' \
  -T <(echo -e "From: emilysoolee@gmail.com\nTo: emilysoolee@gmail.com\nSubject: Status:\n\nTest Pass: $TEST_PASS Build Success: $BUILD_SUCCESS")

if [ $? -eq 0 ]; then
    echo 'Status email sent!'
else
    echo 'Something went wrong... email was not delivered'
fi

# Exit the script
exit
