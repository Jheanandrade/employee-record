import { EmployeeModel } from 'src/domain/model/employee';
import { IUpdateEmployee } from './../../../domain/usecases/update-employee';

export class UpdateEmployeeDynamoDBService implements IUpdateEmployee{
constructor(
  private db: AWS.DynamoDB.DocumentClient
) {}
async execute (param: IUpdateEmployee.Param) {
    const params: AWS.DynamoDB.DocumentClient.UpdateItemInput = {
      TableName: 'employeeTable',
      Key: {
        id: param.id
      },
      UpdateExpression: 'set #name = :name, #age = :age, #role = :role',
      ExpressionAttributeNames: {
        '#name': 'name',
        '#age': 'age',
        '#role': 'role'
      },
      ExpressionAttributeValues: {
        ':name': param.name,
        ':age': param.age,
        ':role': param.role,
      },
      ReturnValues:"ALL_NEW"
    }

    const updateEmployee = await this.db.update(params).promise()

    const newEmployee: EmployeeModel = {
      id: updateEmployee.Attributes.id,
      name: updateEmployee.Attributes.name,
      age: updateEmployee.Attributes.age,
      role: updateEmployee.Attributes.role
    }
    return newEmployee
  }
}