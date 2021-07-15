import { EmployeeModel } from './../model/employee';

export interface IGetAllEmployee {
  execute: () => Promise<EmployeeModel[]>
}
