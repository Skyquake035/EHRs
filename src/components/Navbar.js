import React from 'react';
import { Layout } from 'antd';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EditOutlined, UserAddOutlined ,UserDeleteOutlined} from '@ant-design/icons';
import { Input } from 'antd';

const { Search } = Input;

const { Header, Footer, Sider, Content } = Layout;

class Navbar extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'table-enter-leave-demo',
  };

  render() {
  return (
    <Layout style={{minHeight: 700}}>
      <Sider
      theme="dark"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <br/><br/><center><Avatar className="picture" size={80} icon={<UserOutlined />} style={{
        backgroundColor: '#03ADB8',
      }}/></center>
        <br/><h2 style={{textAlign: 'center',color:'white'}}>ชื่อ</h2>
        <h3 style={{textAlign: 'center',color:'white'}}>ตำแหน่ง</h3>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
          <Menu.Item key="1" icon={<UserOutlined />} >
            รายชื่อผู้ป่วย
          </Menu.Item>
          <Menu.Item key="2" icon={<UserAddOutlined />}>
            เพิ่มรายชื่อผู้ป่วย
          </Menu.Item>
          <Menu.Item key="3" icon={<EditOutlined />}>
            แก้/ลบรายชื่อผู้ป่วย
          </Menu.Item>
          <Menu.Item key="4" icon={<UserDeleteOutlined />}>
            ลบรายชื่อแพทย์
          </Menu.Item>
        </Menu>
        <br/><center><Button className="button" style={{ color:"white", marginTop: 70}}>ออกจากระบบ</Button></center>
      </Sider>
    <Layout style={{background: '#E8E4E4'}}>
      <Header className="site-layout-sub-header-background" style={{padding: 0, minHeight: 60 }} >
      <div className={`${this.props.className}-nav`}>
              <span>
                <img
                style={{margin: '6px'}}
                  height="50"
                  alt="img"
                  src="../images/logo.PNG"
                />
              </span>
            </div>
            <div className={`${this.props.className}-action-bar`}>
          <Search           
            placeholder="ค้นหา" 
            onSearch={value => console.log(value)} 
            enterButton />
          </div>
      </Header>   
      <Content style={{ margin: '0px 0px 0', background: '#E8E4E4'}}>
          
      </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>       
  </Layout>

  );
  }
}
export default Navbar;