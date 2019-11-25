import React, {Component} from 'react';
import { Modal, Form, Input, Select, DatePicker} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { EmployeeInfo, UpdateRequest } from '../../interface/employee';
import moment from 'moment';
import { LevelResponse } from '../../interface/level';
import { DepartmentResponse, DepartmentInfo } from '../../interface/department';
import { CreateRequest } from '../../interface/employee';

interface Props extends FormComponentProps {
  visible: boolean;
  edit: boolean;
  rowData: Partial<EmployeeInfo>;
  hide(): void;
  departmentList: DepartmentResponse;
  levelList: LevelResponse;
  createData(param: CreateRequest, callback: () => void): void;
  updateData(param: UpdateRequest, callback: () => void): void;
}
interface State {
  confirmLoading: boolean;
}
class InfoModal extends Component<Props, State> {
  state: State = {
    confirmLoading: false
  }
  handleOk = () => {
    this.props.form.validateFields((err) => {
      if(!err) {
        this.setState({
          confirmLoading: true
        })
        let param = this.props.form.getFieldsValue();
        param.hiredate = param.hiredate.format('YYYY-MM-DD');
        if (!this.props.edit) {
          this.props.createData(param as CreateRequest, this.close)
        } else {
          param._id = this.props.rowData._id;
          // TODO
          this.props.updateData(param as UpdateRequest, this.close);
        }
      }
    })
  }
  handleCancel = () => {
    this.close();
  }
  close = () => {
    this.props.hide();
    this.setState({
      confirmLoading: false
    })
  }
  render() {
    let title = this.props.edit ? '编辑' : '添加新员工';
    const { getFieldDecorator } = this.props.form;
    let { name, departmentId, hiredate, levelId} = this.props.rowData;
    let { departmentList, levelList} = this.props;
    return (
      <Modal
        visible={this.props.visible}
        title={title}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        destroyOnClose={true}
        confirmLoading={this.state.confirmLoading}
      >
        <Form layout="vertical">
          <Form.Item label="姓名">
            {
              getFieldDecorator('name', {
                initialValue: name,
                rules:[{required: true, whitespace: true, message:'请输入姓名'}]
              })(<Input
                placeholder="请输入姓名"
                maxLength={20}
                allowClear
              />)
            }
          </Form.Item>
          <Form.Item label="部门">
            {
              getFieldDecorator('departmentId', {
                initialValue: departmentId,
                rules:[{required: true, message: '请选择部门'}]
              })(<Select
                placeholder="请选择部门"
                allowClear
              >
                {
                  departmentList && departmentList.map((department: DepartmentInfo, index) => (
                    <Select.Option value={department._id} key={index}>{department.name}</Select.Option>
                  ))
                }
              </Select>)
            }
          </Form.Item>
          <Form.Item label="入职时间">
            {
              getFieldDecorator('hiredate', {
                initialValue: hiredate? moment(hiredate): undefined,
                rules: [{ required: true, message: '请选择入职时间'}]
              })(<DatePicker
                placeholder="请选择入职时间"
                style={{width: '100%'}}
              />)
            }
          </Form.Item>
          <Form.Item label="职级">
            {
              getFieldDecorator('levelId', {
                initialValue: levelId,
                rules: [{ required: true, message: '请选择职级'}]
              })(<Select
                placeholder="请选择职级"
                allowClear
              >
                {
                  levelList && levelList.map((level, index) => (
                  <Select.Option value={level._id} key={index}>{level.name}</Select.Option>
                  ))
                }
              </Select>)
            }
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
const WrapInfoModal = Form.create<Props>({
  name: 'employee_info'
})(InfoModal);
export default WrapInfoModal;