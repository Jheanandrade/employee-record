import 'source-map-support/register';
import { factoryGetAllEmployee } from './../../../data/factories/factory-get-all-employee';
import type { ValidatedEventAPIGatewayProxyEvent } from 'src/main/libs/apiGateway';
import { formatJSONResponse } from 'src/main/libs/apiGateway';

const handler: ValidatedEventAPIGatewayProxyEvent<null> = async () => {
  const service = factoryGetAllEmployee()

  const employeesResult = await service.execute()
 
  return formatJSONResponse({
    message: `Records captured successfully`,
    data: employeesResult
  });
}

export const main = handler;
