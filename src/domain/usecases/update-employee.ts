import { EmployeeModel } from './../model/employee';

export interface IUpdateEmployee {
  execute: (param: IUpdateEmployee.Param) => Promise<EmployeeModel>
}

export namespace IUpdateEmployee {
  export type Param = {
    id: string
    name: string
    age: number
    role: string
  }
}