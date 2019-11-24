import React, {Component} from 'react';
import { Modal, Form, Input, Select, DatePicker} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { EmployeeInfo } from '../../interface/employee';
import moment from 'moment';

interface Props extends FormComponentProps {
  visible: boolean;
  edit: boolean;
  rowData: Partial<EmployeeInfo>;
  hide(): void;
}
interface State {
  confirmLoading: boolean;
}
class InfoModal extends Component<Props, State> {
  state: State = {
    confirmLoading: false
  }
  handleOk = () => {}
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
    let { name, departmentId, hiredate, levelId} = this.props.rowData
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
                <Select.Option value={1}>技术部</Select.Option>
                <Select.Option value={2}>产品部</Select.Option>
                <Select.Option value={3}>运营部</Select.Option>
              </Select>)
            }
          </Form.Item>
          <Form.Item label="入职时间">
            {
              getFieldDecorator('hiredate', {
                initialValue: hiredate,
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
                <Select.Option value={1}>1级</Select.Option>
                <Select.Option value={2}>2级</Select.Option>
                <Select.Option value={3}>3级</Select.Option>
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