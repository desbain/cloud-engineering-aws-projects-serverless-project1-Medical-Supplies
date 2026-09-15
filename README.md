# Serverless Medical Supplies Ordering App

A serverless order-intake application: a static HTML/JS/CSS frontend lets a user submit a
medical supply request, which flows through **API Gateway → Lambda → DynamoDB**, with the
whole pipeline monitored live via CloudWatch and the AWS CLI.

## ⚠️ Before pushing this to its own repo

The files in this folder are currently nested one level deeper than expected — there's a
duplicate inner folder:

```
serverless-project1-Medical-Supplies/
└── serverless-project1-Medical-Supplies/   ← the real project lives in here
    ├── index.html
    ├── script.js
    ├── styles.css
    └── New folder/                          ← all the screenshots
```

Flatten this (move `index.html`, `script.js`, `styles.css`, and the screenshots up one level,
and rename `New folder/` to something like `screenshots/`) before initializing this as its own
git repo, otherwise the repo root will just contain another copy of itself.

## What was built

- **Frontend**: `index.html` (order form), `script.js` (submits the order to the API),
  `styles.css` (styling)
- **API Gateway**: a REST API stage that receives order submissions and invokes the Lambda
  function
- **Lambda**: a function that processes each incoming order and writes it to DynamoDB
- **DynamoDB**: a table (`medical-orders`) storing submitted orders
- **CloudWatch**: a dashboard tracking Lambda execution details for the function
- **AWS CLI**: used to tail a live feed of Lambda invocations while testing

## Walkthrough (in order)

1. `lamda-function-and-test-event.png` — the Lambda function with a test event configured
2. `dynamodb-medical-orders-table.png` — the DynamoDB table created to hold orders
3. `lamda-function-test-results-in-dynamodb.png`, `lamda-function-test-results-in-dynamodb-1.png` — confirming a test invocation writes correctly to DynamoDB
4. `api-gateway-medical-orders-api-configuration.png` — the API Gateway REST API wired to the Lambda function
5. `test-api-stage.png` — testing the deployed API stage
6. `updated-script.js.png` — updating the frontend script to call the live API endpoint
7. `new-order-medical-supply-request.png` — submitting a new order through the frontend form
8. `order-submitted-successfully.png` — successful order confirmation in the UI
9. `dynamodb-recent-orders-submitted.png`, `dynamodb-recent-orders-submitted-details.png` — the newly submitted order visible in DynamoDB
10. `aws-cli-live -feed -lamda-functions.png` — tailing Lambda invocations live via the AWS CLI while placing an order
11. `lambda-functions-executions-in-cloud-watch.png`, `lambda-functions-executions-in-cloud-watch-details.png`, `lambda-functions-executions-in-cloud-watch-dashboard-details-1.png`, `lambda-functions-executions-in-cloud-watch-details-1.png` — CloudWatch dashboard showing the function's execution history and metrics

## AWS services used

API Gateway, Lambda, DynamoDB, CloudWatch, IAM (implicit, for the Lambda execution role).
