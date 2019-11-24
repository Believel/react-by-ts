export interface EmployeeRequest {
  name: string;
  departmentId: number | undefined;
}
export interface EmployeeInfo {
  _id: number;
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
  departmentId: number;
  hiredate: string;
  levelId: number;
}
export interface UpdateRequest extends CreateRequest {
  _id: string;
}
export interface DeleteRequest {
  _id: string;
}
