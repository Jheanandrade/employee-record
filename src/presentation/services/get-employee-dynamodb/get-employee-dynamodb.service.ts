import { EmployeeModel } from 'src/domain/model/employee';
import { IGetEmployee } from './../../../domain/usecases/get-employee';

export class GetEmployeeDynamoDBService implements IGetEmployee {
  constructor(
    private db: AWS.DynamoDB.DocumentClient
  ) {}
 async execute (param: IGetEmployee.Param) {
  const paramsQuery = {
    TableName : 'employeeTable',
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeNames:{
        "#id": "id"
    },
    ExpressionAttributeValues: {
        ":id": param.id
    }
  }
  const employeeResult = await this.db.query(paramsQuery).promise()
  console.log(employeeResult.Items)
  const { id, name, age, role} = employeeResult.Items[0]

  const employee: EmployeeModel = {
    id,
    name,
    age,
    role
  }
  return employee
 }
}