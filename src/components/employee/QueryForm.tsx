import React, { Component } from 'react';
import { Form, Input, Select, Button} from 'antd';
import { FormComponentProps} from 'antd/lib/form';
import { EmployeeRequest} from '../../interface/employee';
import { DepartmentResponse } from '../../interface/department';

const {Option} = Select;
interface Props extends FormComponentProps {
  getData(data: EmployeeRequest, callback: () => void): void;
  setLoading(loading: boolean): void;
  departmentList: DepartmentResponse;
}
class QueryForm extends Component<Props, EmployeeRequest>{
  state: EmployeeRequest = {
    name: '',
    departmentId: undefined
  }
  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      name: e.currentTarget.value
    })
  }
  handleDepartmentChange = (value: number) => {
    this.setState({
      departmentId: value
    })
  }
  handleReset = () => {
    this.setState({
      name: '',
      departmentId: undefined
    }, () => {
      this.queryEmployee(this.state)
    })
    
  }
  handleSubmit = () => {
    this.queryEmployee(this.state)
  }
  queryEmployee(param: EmployeeRequest) {
    this.props.setLoading(true);
    this.props.getData(param, () => {
      this.props.setLoading(false)
    })
  }
  componentDidMount() {
    this.queryEmployee(this.state);
  }
  render() {
    const { departmentList } = this.props
    return (
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="姓名"
            style={{width: 180}}
            allowClear
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="部门"
            style={{width: 180}}
            allowClear
            value={this.state.departmentId}
            onChange={this.handleDepartmentChange}
          >
            {
              departmentList && departmentList.map((department) => (
              <Option value={department._id} key={department._id}>{department.name}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit}>查询</Button>
        </Form.Item>
        <Form.Item>
          <Button onClick ={this.handleReset}>重置</Button>
        </Form.Item>
      </Form>
    )
  }
}
const WrapQueryForm = Form.create<Props>({
  name: 'employee_query'
})(QueryForm)
export default WrapQueryForm;