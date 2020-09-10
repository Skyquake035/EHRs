import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { MailOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Table } from 'antd';
import { Input } from 'antd';
import Title from 'antd/lib/skeleton/Title';

const columns = [
  { title: 'รหัสผู้ป่วย', dataIndex: 'number', key: 'number' },
  { title: 'คำนำหน้า', dataIndex: 'prefix', key: 'prefix' },
  { title: 'ชื่อ', dataIndex: 'name', key: 'surname' },
  { title: 'นามสกุล', dataIndex: 'surname', key: 'surname' },
  {
    title: ' ',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    number: '1000000000',
    prefix: 'นาย',
    name: 'ศิวพงษ์',
    surname: 'กอบกิจ',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    number: '2000000000',
    prefix: 'นาย',
    name: 'ศุภกิจ',
    surname: 'สร้อยจินดา',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 3,
    number: '3000000000',
    prefix: 'นาย',
    name: 'ศารทูล',
    surname: 'ขุนสนิท',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 4,
    number: '4000000000',
    prefix: 'นางสาว',
    name: 'เสาวลักษณ์',
    surname: 'จันทรชัยพฤก',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
];

const { Search } = Input;

const { Header, Content, Footer } = Layout;

const { Sider} = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{padding:15}}>
        <Avatar style={{float:'right'}} icon={<UserOutlined />} />
          <Title style={{color:'white'}} level={4}>ชื่อเว็บ</Title>
        </Header>

      <Layout>
        <Sider style={{background:'white'}}key='sider'>
          <Avatar style={{float:'center'}} icon={<UserOutlined />} />
          <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
            <Menu.Item key='Dashboard1'>Dashboard1</Menu.Item>
            <Menu.Item key='Dashboard2'>Dashboard2</Menu.Item>
            <SubMenu 
            title={
            <span>
              <MailOutlined />
              <span>About Us</span>
            </span>}>
              <Menu.ItemGroup key='AboutUs' title='About Us'>
                <Menu.Item key='Location1'>Location1</Menu.Item>
                <Menu.Item key='Location2'>Location2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>           
        </Sider>
        <Layout>
        
        <Content style={{ padding: '0 50px',background: '#E8E4E4' }} key='box'>
          <Breadcrumb style={{ margin: '16px 0' }}>
          <Search style={{ width: 200 }} 
          placeholder="ค้นหา" 
          onSearch={value => console.log(value)}
          />
          <br />
          <br />
            <Breadcrumb.Item>รายชื่อ</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{background: '#E8E4E4',padding: 24,minHeight: 580}}>
          <Table
            columns={columns}
              expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                rowExpandable: record => record.name !== 'Not Expandable',
              }}
              dataSource={data}
            />
          </div>
    </Content>
        <Footer style={{ textAlign: 'center' }}>Obodroid Limited Corporation</Footer>
        </Layout>
      </Layout>
      </Layout>
    </div>
  );
}
export default App;
