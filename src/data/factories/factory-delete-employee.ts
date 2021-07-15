import { DeleteEmployeeDynamoDBService } from './../../presentation/services/delete-employee-dynamodb/delete-employee-dynamodb.service';
import { IDeleteEmployee } from './../../domain/usecases/delete-employee';
import * as AWS from 'aws-sdk';

export const factoryDeleteEmployee = ():IDeleteEmployee => {
  const docClient = new AWS.DynamoDB.DocumentClient()
  return new DeleteEmployeeDynamoDBService(docClient)
} 