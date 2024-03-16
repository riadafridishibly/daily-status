#!/bin/bash
set -e

echo 'Building....'
yarn build
echo 'Switching branch...'
git switch gh-pages
echo 'Removing files...'
rm -r assets index.html logo.svg
echo 'Copying files...'
mv dist/* .
git add assets index.html logo.svg
git commit -m "deploy"
git push origin gh-pages
git switch -
