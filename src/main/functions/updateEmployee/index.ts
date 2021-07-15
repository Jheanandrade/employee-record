import schema from '../../../domain/dto/update-employee-dto';
import { handlerPath } from 'src/main/libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'put',
        path: 'employee',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
