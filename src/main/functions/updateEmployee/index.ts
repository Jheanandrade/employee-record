import schema from '../../../domain/dto/update-employee-dto';
import { handlerPath } from 'src/main/libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'put',
        path: 'employee/{id}',
        request: {
          schema: {
            'application/json': schema
          },
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
    Action: ["dynamodb:UpdateItem"],
    Resource: 'arn:aws:dynamodb:us-east-1:*:table/employeeTable'
  }]
}
