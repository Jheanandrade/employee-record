import { factoryUpdateEmployee } from './../../../data/factories/factory-update-employee';
import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from 'src/main/libs/apiGateway';
import { formatJSONResponse } from 'src/main/libs/apiGateway';
import { middyfy } from 'src/main/libs/lambda';

import schema from '../../../domain/dto/update-employee-dto';

const create: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const service = factoryUpdateEmployee()

  const _id = event.pathParameters.id
  const {name, age, role} = event.body

  const result = await service.execute({id: _id, name, age, role})
  
  return formatJSONResponse({
    message: `Record created successfully`,
    data: result,
  });
}

export const main = middyfy(create);
