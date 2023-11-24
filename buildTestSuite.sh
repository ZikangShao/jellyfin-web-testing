#!/bin/bash 

EMAIL="emilysoolee@gmail.com"
PROJECT_PATH=".\jellyfin-web-testing"

# # Navigate to the project directory
# # cd $SOFTWARE_UNDER_TEST_PATH

# # Install project dependencies
# # npm in stall 
# # npm start
# # npm run biuld: development

# # Install test dependencies 
# # npm install -D vitest
# # npm install jsdom
# # npx update-browserslist-db@latest
# # npm i -D @vitest/coverage-v8

# # Run Test Code via script 
# echo "Building Test Code..."
# cd $PROJECT_PATH
npm run test

# # Capture the results of the build and tests
BUILD_RESULT="False"
TEST_RESULT="False"

# # Check if the build and tests were successful


# # Email the status to the specified email address
# echo "Sending email to $EMAIL..."
echo "Build Succeeded: $BUILD_RESULT" > status.txt
echo "Tests Passed: $TEST_RESULT" >> status.txt
mail -s $EMAIL < status.txt