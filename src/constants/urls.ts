let isDev = process.env.NODE_ENV === 'development';
export const GET_EMPLOYEE_URL = isDev ? '/api/employee/getEmployee.action': '/api/getEmployee';