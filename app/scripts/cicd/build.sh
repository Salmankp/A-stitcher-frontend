#!/bin/bash
set -xeuo pipefail
export AWS_PAGER=""

app=${APP_NAME:-default-app}
version=${GITHUB_SHA:-local}
export REACT_APP_BACKEND_URL=$REACT_APP_API_ENDPOINT
#REACT_APP_API_ENDPOINT=${REACT_APP_API_ENDPOINT:-http://localhost:3000/api/v1}
zip_file=build-${app}-${version}.tar.gz

echo "[INFO] Building src for ${app}"
echo "[INFO] Using SHA ${version} as version"
echo "[INFO] Using ${REACT_APP_API_ENDPOINT} as api endpoint"
rm -rf ./build
yarn build-cicd

#echo "[INFO] Copying build to release bucket"
#tar -zcvf ${zip_file} build
#aws s3 cp ${zip_file} ${RELEASE_BUCKET}/app/atc-frontend/

echo "[INFO] Copying build to cloudfront bucket"
aws s3 rm ${CLOUDFRONT_S3} --recursive
aws s3 sync ./build/ ${CLOUDFRONT_S3}

echo "[INFO] Invalidating cloudfront cache..."
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_ID} --paths "/*"