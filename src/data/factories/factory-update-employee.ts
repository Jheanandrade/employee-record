import { UpdateEmployeeDynamoDBService } from './../../presentation/services/update-employee-dynamodb/update-employee-dynamodb.service';
import * as AWS from 'aws-sdk';
import { IUpdateEmployee } from './../../domain/usecases/update-employee';

export const factoryUpdateEmployee = ():IUpdateEmployee => {
  const docClient = new AWS.DynamoDB.DocumentClient()
  return new UpdateEmployeeDynamoDBService(docClient)
} 