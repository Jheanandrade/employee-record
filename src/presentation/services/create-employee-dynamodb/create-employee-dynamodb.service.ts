import { ICreateEmployee } from './../../../domain/usecases/create-employee';
import { v1 as uuidv1 } from 'uuid';
import { EmployeeModel } from 'src/domain/model/employee';

export class CreateEmployeeDynamoDBService implements ICreateEmployee {
  constructor(
    private db: AWS.DynamoDB.DocumentClient
  ) {}
  
  async execute (param: ICreateEmployee.Param) {
    const employee: EmployeeModel = {
      id: uuidv1(),
      name: param.name,
      age: param.age,
      role: param.role
    }

    const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
      TableName: 'employeeTable',
      Item: employee
    } 

    await this.db.put(params).promise()

    return employee
  }
}
