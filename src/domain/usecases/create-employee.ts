import { EmployeeModel } from "../model/employee";

export interface ICreateEmployee {
  execute: (param: ICreateEmployee.Param) => Promise<EmployeeModel>
}

export namespace ICreateEmployee {
  export type Param = {
    name: string
    age: number
    role: string
  }
}