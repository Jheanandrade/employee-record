import { EmployeeModel } from './../../../domain/model/employee';
import { IGetAllEmployee } from './../../../domain/usecases/get-all-employee';

export class GetAllEmployeeDynamoDBService implements IGetAllEmployee {
  constructor(
    private db: AWS.DynamoDB.DocumentClient
  ) {}
 async execute () {
  var params = {
    TableName: 'employeeTable',
    ProjectionExpression: "id, #name, #age, #role",
    ExpressionAttributeNames: {
      '#name': 'name',
      '#age': 'age',
      '#role': 'role'
    },
    };
  const employeeResult = await this.db.scan(params).promise()

  return employeeResult.Items.map((item)=>{
    const employee: EmployeeModel = {
      id: item.id,
      name: item.name,
      age: item.age,
      role: item.role
    }
    return employee
  })
   
 }
}