import React, {Component} from 'react';
import QueryForm from './QueryForm';
import InfoModal from './InfoModal';
import { Table, Button} from 'antd';
import getColunms from './colums';
import { connect} from 'react-redux';
import { Dispatch, bindActionCreators} from 'redux';

import './index.css';

import { getEmployee, createEmployee, deleteEmployee, updateEmployee} from '../../store/actions/employee';
import { getDepartment} from '../../store/actions/department';
import { getLevel } from '../../store/actions/level';

import { EmployeeResponse, EmployeeInfo, EmployeeRequest, CreateRequest, DeleteRequest, UpdateRequest} from '../../interface/employee';
import { LevelResponse } from '../../interface/level';
import { DepartmentResponse } from '../../interface/department';
import { DOWNLOAD_EMPLOYEE_URL} from '../../constants/urls';
interface State {
  showModal: boolean;
  edit: boolean;
  rowData: Partial<EmployeeInfo>; // Partial 所有属性都是可选的
  loading: boolean;
}
interface Props {
  employeeList: EmployeeResponse;
  levelList: LevelResponse;
  departmentList: DepartmentResponse;
  onGetEmployee(param: EmployeeRequest, callback: () => void): void;
  onCreateEmployee(param: CreateRequest, callback: () => void): void;
  onDeleteEmployee(param: DeleteRequest): void;
  onUpdateEmployee(param: UpdateRequest, callback: () => void): void;
  onGetLevel(callback?: () => void): void;
  onGetDepartment(callback?: () => void): void;
}

class Employee extends Component<Props, State>{
  state: State = {
    showModal: false,
    edit: false,
    rowData: {},
    loading: false
  }
  componentDidMount() {
    this.props.onGetLevel();
    this.props.onGetDepartment();
  }
  setLoading = (loading: boolean) => {
    this.setState({
      loading
    })
  }
  // 隐藏模态框
  hideModal = () => {
    this.setState({
      showModal: false,
      rowData: {}
    })
  }
  // 添加新员工
  handleCreate = () => {
    this.setState({
      showModal: true,
      edit: false,
      rowData: {}
    })
  }
  handleUpdate = (record: EmployeeInfo) => {
    this.setState({
      showModal: true,
      edit: true,
      rowData: record
    })
  }
  handleDelete = (param: DeleteRequest) => {
    this.props.onDeleteEmployee(param)
  }
  handleDownload = () => {
    window.location.href = DOWNLOAD_EMPLOYEE_URL;
  }
  render() {
    const { onGetEmployee, employeeList, onCreateEmployee, onUpdateEmployee, levelList, departmentList} = this.props;
    const pagination = {
      total: 10,
      current: 1,
      pageSize: 5
    }
    return (
      <>
        <QueryForm 
          getData={onGetEmployee} 
          setLoading ={this.setLoading}
          departmentList={departmentList}/>
        <div className="toolbar">
          <Button type="primary" icon="plus" onClick={this.handleCreate}>添加新员工</Button>
          <Button type="primary" icon="download" className="right" onClick={this.handleDownload}>导出</Button>
        </div>
        <InfoModal
          visible={this.state.showModal}
          edit={this.state.edit}
          rowData={this.state.rowData}
          hide={this.hideModal}
          departmentList = { departmentList}
          levelList= {levelList}
          createData ={onCreateEmployee}
          updateData={onUpdateEmployee}
        />
        <Table 
          columns={getColunms(this.handleUpdate, this.handleDelete)}
          rowKey="_id" 
          bordered 
          dataSource={employeeList} 
          className="table"
          pagination= { pagination }
          loading={this.state.loading}/>
      </>
    )
  }
}
const mapStateToProps = (state: any) => {
  return {
    employeeList: state.employee.employeeList,
    departmentList: state.department.departmentList,
    levelList: state.level.levelList
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onGetEmployee: getEmployee,
  onCreateEmployee: createEmployee,
  onDeleteEmployee: deleteEmployee,
  onUpdateEmployee: updateEmployee,
  onGetLevel: getLevel,
  onGetDepartment: getDepartment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Employee);