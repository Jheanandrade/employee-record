# Serverless - AWS Node.js Typescript

This project has been generated using the 'aws-nodejs-typescript' template from the Serverless framework.


## Installation/deployment instructions

- Run `yarn` to install the project dependencies
- Run `sls deploy` to deploy this stack to AWS

## Test your service

This template contains five lambda functions triggered by HTTP requests made on the API Gateway REST /employee route provisioned by the POST, GET, DELETE, and PUT methods.

### Locally

To test the functions locally, run the following command:

- POST
```
yarn sls invoke local -f createEmployee --path src/main/functions/deleteEmployee/mock.json 
```
____
- DELETE
```
yarn sls invoke local -f deleteEmployee --path src/main/functions/deleteEmployee/mock.json 
```
____
- PUT
```
yarn sls invoke local -f updateEmployee --path src/main/functions/updateEmployee/mock.json
```
____
- GET
```
yarn sls invoke local -f getEmployee --path src/main/functions/getEmployee/mock.json
```
____
- GET All
```
yarn sls invoke local -f getAllEmployee --path src/main/functions/getAllEmployee/mock.json
```

### Endpoints

- POST
```
https://011cfyewkb.execute-api.us-east-1.amazonaws.com/dev/employee
```
Request:
```
 Body

{
    "name": "_name",
    "age": _age,
    "role": "_role"
}
```
____

- DELETE
```
https://011cfyewkb.execute-api.us-east-1.amazonaws.com/dev/employee/{id}
```
Request:
```
Path Variable: id
```
____
- PUT
```
https://011cfyewkb.execute-api.us-east-1.amazonaws.com/dev/employee/{id}
```
Request:
```
Body

{
    "name": "_name",
    "age": _age,
    "role": "_role"
}

Path Variable: id
```



____
- GET

```
https://011cfyewkb.execute-api.us-east-1.amazonaws.com/dev/employee/{id}
```
Request:
```
Path Variable: id
```


____
- GET All

```
 https://011cfyewkb.execute-api.us-east-1.amazonaws.com/dev/employee
```

