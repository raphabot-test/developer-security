provider "aws" {
  region    = "us-east-1"
}

resource "aws_s3_bucket" "hello_app_bucket" {
  bucket    = "hello-app-bucket"
  acl       = "public-read-write"
}