import React, {Component} from 'react';
import QueryForm from './QueryForm';
import { EmployeeResponse} from '../../interface/employee';
import { Table} from 'antd';
import {employeeColumns} from './colums';
import './index.css';
interface State {
  employee: EmployeeResponse
}
class Employee extends Component<{}, State>{
  state: State = {
    employee: undefined
  }
  setEmployee = (employee: EmployeeResponse) => {
    this.setState({
      employee
    })
  }
  render() {
    return (
      <>
        <QueryForm onDataChange={this.setEmployee}/>
        <Table columns={employeeColumns} rowKey="_id" bordered dataSource={this.state.employee} className="table"/>
      </>
    )
  }
}
export default Employee;