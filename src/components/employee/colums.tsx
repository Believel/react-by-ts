import React from 'react';
import { Button, Divider, Popconfirm} from 'antd';
import { EmployeeInfo, DeleteRequest} from '../../interface/employee';
// TODO
// 接口引入
const employeeColumns = () => {
  return [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '部门',
      dataIndex: 'departmentName',
      key: 'departmentName'
    },
    {
      title: '入职时间',
      dataIndex: 'hiredate',
      key: 'hiredate'
    },
    {
      title: '职级',
      dataIndex: 'levelName',
      key: 'levelName'
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: EmployeeInfo) => (
        <span>
          <Button size="small" icon="edit">编辑</Button>
          <Divider type="vertical"/>
          <Popconfirm 
            title={`确定删除${record.name}吗？`}
          >
            <Button size="small" type="danger" icon="delete">删除</Button>
          </Popconfirm>
        </span>
      )
      
    }
  ]
}
export default employeeColumns;
