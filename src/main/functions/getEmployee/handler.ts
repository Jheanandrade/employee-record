import { factoryGetEmployee } from './../../../data/factories/factory-get-employee';
import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from 'src/main/libs/apiGateway';
import { formatJSONResponse } from 'src/main/libs/apiGateway';

const handler: ValidatedEventAPIGatewayProxyEvent<null> = async (event) => {
  const service = factoryGetEmployee()
  console.log(event)
  const employeeResult = await service.execute({id: event.pathParameters.id})
 
  return formatJSONResponse({
    message: `Record captured successfully`,
    data: employeeResult
  });
}

export const main = handler;
