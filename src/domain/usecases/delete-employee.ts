export interface IDeleteEmployee {
  execute: (param: IDeleteEmployee.Param) => Promise<void>
}

export namespace IDeleteEmployee {
  export type Param = {
    id: string
  }
}