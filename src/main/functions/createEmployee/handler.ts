import { factoryCreateEmployee } from './../../../data/factories/factory-create-employee';
import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from 'src/main/libs/apiGateway';
import { formatJSONResponse } from 'src/main/libs/apiGateway';
import { middyfy } from 'src/main/libs/lambda';
import schema from '../../../domain/dto/create-employee-dto';

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  
  const service = factoryCreateEmployee()

  const {name, age, role} = event.body

  const result = await service.execute({name, age, role})
  
  return formatJSONResponse({
    message: `Record created successfully`,
    data: result,
  });
}

export const main = middyfy(handler);
