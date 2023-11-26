# #!/bin/bash 

email=$1
PROJECT_PATH=".\jellyfin-web-testing"

build_comand='npm run build:development'
# test_command='npm run test'

# Build Software Under Test 
echo "Building Software Under Test..."
cd $PROJECT_PATH
npm run start
npm run build:development
$build_command

# Check building software under test was successful
if [ $? -eq 0 ]; then
    echo 'BUILD_SUCCESS true' > status.txt
else 
    echo 'BUILD_SUCCESS false' > status.txt
fi

# Run Test Code via script 
echo "Running test code..."
cd $PROJECT_PATH
# $test_command

# check whether all tests passed 
# if [ $test_command -eq 0 ]; then
#     echo 'TEST_PASS true' > test_pass.txt
# else 
#     echo 'TEST_PASS false' > test_pass.txt

# echo "continuing after webpack exits)"
# sleep 1

# email the status of build and tests to the specified email address using curl
echo "Sending email to $email..."

# curl --url 'smtps://smtp.gmail.com:465' --ssl-reqd \
#   --mail-from "$email" \
#   --mail-rcpt 'easinemily@gmail.com' \
#   --user "$email"':password' \
#   -T <(echo -e "From: emilysoolee@gmail.com\nTo: easinemily@gmail.com\nSubject: Status:\n\nBuild Result: $BUILD_RESULT")

# echo "Status email sent."

# Exit the script
exit