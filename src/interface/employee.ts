export interface EmployeeRequest {
  name: string;
  departmentId: number | undefined;
}
export interface EmployeeInfo {
  id: number;
  key: number;
  name: string;
  department: string;
  hiredate: string;
  level: string;
}
export type EmployeeResponse = EmployeeInfo[] | undefined;

export interface CreateRequest {
  name: string;
  departmentId: number;
  hiredate: string;
  levelId: number;
}
