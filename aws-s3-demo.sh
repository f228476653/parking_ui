echo "publishing to s3::/pmsplus"
aws s3 rm s3://pmsplus/ --recursive
aws s3 cp "./dist/" s3://pmsplus/ --recursive
