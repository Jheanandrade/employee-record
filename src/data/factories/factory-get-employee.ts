import { GetEmployeeDynamoDBService } from './../../presentation/services/get-employee-dynamodb/get-employee-dynamodb.service';
import * as AWS from 'aws-sdk';
import { IGetEmployee } from './../../domain/usecases/get-employee';

export const factoryGetEmployee = ():IGetEmployee => {
  const docClient = new AWS.DynamoDB.DocumentClient()
  return new GetEmployeeDynamoDBService(docClient)
} 