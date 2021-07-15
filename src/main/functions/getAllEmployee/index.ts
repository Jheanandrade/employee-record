import { handlerPath } from 'src/main/libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'employee/all'
      }
    }
  ],
  iamRoleStatements:[{
    Effect: 'Allow',
    Action: ['dynamodb:Scan'],
    Resource: 'arn:aws:dynamodb:us-east-1:*:table/employeeTable'
  }]
}
