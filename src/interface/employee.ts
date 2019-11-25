export interface EmployeeRequest {
  name: string;
  departmentId: number | undefined;
}
export interface EmployeeInfo {
  _id: string;
  key: number;
  name: string;
  departmentName?: string;
  departmentId: string;
  hiredate: string;
  levelName?: string;
  levelId: string;
}
export type EmployeeResponse = EmployeeInfo[] | undefined;

export interface CreateRequest {
  name: string;
  departmentId: string;
  hiredate: string;
  levelId: string;
}
export interface UpdateRequest extends CreateRequest {
  _id: string;
}
export interface DeleteRequest {
  _id: string;
}
