import { CreateEmployeeDynamoDBService } from './../../presentation/services/create-employee-dynamodb/create-employee-dynamodb.service';
import { ICreateEmployee } from './../../domain/usecases/create-employee';
import * as AWS from 'aws-sdk'

export const factoryCreateEmployee = (): ICreateEmployee => {
  const docClient = new AWS.DynamoDB.DocumentClient()
  return new CreateEmployeeDynamoDBService(docClient)
}