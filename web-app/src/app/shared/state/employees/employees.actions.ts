export class FetchEmployees {
  public static readonly type = '[Employees] Fetch all employees';
}

export class FetchEmployeeById {
  public static readonly type = '[Employees] Fetch employee by id';
  constructor(public payload: { id: string }) { }
}
