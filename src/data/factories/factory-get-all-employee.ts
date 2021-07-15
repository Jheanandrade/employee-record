import { GetAllEmployeeDynamoDBService } from './../../presentation/services/get-all-employee-dynamodb/get-all-employee-dynamodb.service';
import * as AWS from 'aws-sdk';
import { IGetAllEmployee } from './../../domain/usecases/get-all-employee';

export const factoryGetAllEmployee = ():IGetAllEmployee => {
  const docClient = new AWS.DynamoDB.DocumentClient()
  return new GetAllEmployeeDynamoDBService(docClient)
} 