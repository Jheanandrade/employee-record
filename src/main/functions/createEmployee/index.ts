import schema from '../../../domain/dto/create-employee-dto';
import { handlerPath } from 'src/main/libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'employee',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ],
  iamRoleStatements:[{
     Effect: 'Allow',
     Action: ['dynamodb:PutItem'],
     Resource: 'arn:aws:dynamodb:us-east-1:*:table/employeeTable'
   }]
  }
