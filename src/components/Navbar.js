import React from 'react';
import { Layout } from 'antd';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EditOutlined, UserAddOutlined ,UserDeleteOutlined} from '@ant-design/icons';
import { NavLink } from 'react-router-dom'

const { Sider } = Layout;

class Navbar extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'table-enter-leave-demo',
  };

  render() {
  return (
    <div>
      <Sider 
        style={{background:'white'}}
        breakpoint="lg" collapsedWidth="0" 
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <center><Avatar className="picture" size={80} icon={<UserOutlined />} style={{
        backgroundColor: '#03ADB8',marginTop: '70px'}}/></center>

        <br/><h2 style={{textAlign: 'center'}}>ชื่อ</h2>
        <h3 style={{textAlign: 'center'}}>ตำแหน่ง</h3>
        <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} >
            <Menu.Item key="1" icon={<UserOutlined />} ><NavLink exact to="/" >รายชื่อผู้ป่วย</NavLink></Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />}><NavLink to="/add">เพิ่มรายชื่อผู้ป่วย</NavLink></Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />}><NavLink to="/patient">แก้/ลบรายชื่อผู้ป่วย</NavLink></Menu.Item>
            <Menu.Item key="4" icon={<UserDeleteOutlined />}><NavLink to="/delete">ลบรายชื่อแพทย์</NavLink></Menu.Item>
          </Menu>
          <br/><center><Button className="button" style={{ color:"white", marginTop: 70}}>ออกจากระบบ</Button></center>
        </Sider>       
      </div>
  );
  }
}
export default Navbar;