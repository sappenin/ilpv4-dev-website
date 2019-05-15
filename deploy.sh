#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run-script docz:build

# navigate into the build output directory
cd ./.docz/dist

# if you are deploying to a custom domain
echo 'ilpv4.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:sappenin/ilpv4-dev-website.git master:gh-pages

cd -
