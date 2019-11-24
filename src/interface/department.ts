export interface DepartmentInfo {
  _id: string;
  name: string;
}
export type DepartmentResponse = DepartmentInfo[] | undefined;