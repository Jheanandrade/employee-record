import { IDeleteEmployee } from './../../../domain/usecases/delete-employee';

export class DeleteEmployeeDynamoDBService implements IDeleteEmployee {
  constructor(
    private db: AWS.DynamoDB.DocumentClient
  ) {}
 async execute (param: IDeleteEmployee.Param) {

  const params: AWS.DynamoDB.DocumentClient.DeleteItemInput = {
    TableName: 'employeeTable',
    Key: {
      id: param.id
    }
  }
  await this.db.delete(params).promise()
 }
}