import { handlerPath } from 'src/main/libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'employee/{id}',
        request:{
          parameters:{
            paths:{
              id: true
            }
          }
      }
    }
    }
  ],
  iamRoleStatements:[{
    Effect: 'Allow',
    Action: ['dynamodb:DeleteItem'],
    Resource: 'arn:aws:dynamodb:us-east-1:*:table/employeeTable'
  }]
}
