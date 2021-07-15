import 'source-map-support/register';
import { factoryDeleteEmployee } from 'src/data/factories/factory-delete-employee';
import type { ValidatedEventAPIGatewayProxyEvent } from 'src/main/libs/apiGateway';
import { formatJSONResponse } from 'src/main/libs/apiGateway';

const handler: ValidatedEventAPIGatewayProxyEvent<null> = async (event) => {
  const service = factoryDeleteEmployee()

  await service.execute({id: event.queryStringParameters.id})
 
  return formatJSONResponse({
    message: `Record deleted successfully`
  });
}

export const main = handler;
