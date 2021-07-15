import { EmployeeModel } from './../model/employee';

export interface IGetEmployee {
  execute: (param: IGetEmployee.Param) => Promise<EmployeeModel>
}

export namespace IGetEmployee {
  export type Param = {
    id: string
  }
}