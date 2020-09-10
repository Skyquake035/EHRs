import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types';
import { TweenOneGroup } from 'rc-tween-one';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EditOutlined, UserAddOutlined ,UserDeleteOutlined , InfoCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Row, Col ,Divider } from 'antd';
import { Popover } from 'antd';


//523svsvdsfv
const content = (
  <div>
    <p style={{color: 'red'}}>ผู้ป่วยฉุกเฉินวิกฤต</p>
    <p style={{color: '#FFC300 '}}>ผู้ป่วยฉุกเฉินเร่งด่วน</p>
    <p style={{color: 'green'}}>ผู้ป่วยฉุกเฉินแต่ไม่รุนแรง</p>
    <p>ผู้ป่วยทั่วไป</p>
  </div>
);

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

const { Search } = Input;

const { Header, Footer, Sider, Content } = Layout;

const TableContext = React.createContext(false);

class App extends React.Component {
  
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'table-enter-leave-demo',
  };

  constructor(props) {
    super(props);
    this.columns = [
      { title: 'รหัสผู้ป่วย', dataIndex: 'number', key: 'number' },
      { title: 'คำนำหน้า', dataIndex: 'prefix', key: 'prefix' },
      { title: 'ชื่อ', dataIndex: 'name', key: 'name' },
      { title: 'นามสกุล', dataIndex: 'surname', key: 'surname' },
    ];
   
   
    this.enterAnim = [
      {
        opacity: 0, x: 30, backgroundColor: '#fffeee', duration: 0,
      },
      {
        height: 0,
        duration: 200,
        type: 'from',
        delay: 250,
        ease: 'easeOutQuad',
        onComplete: this.onEnd,
      },
      {
        opacity: 1, x: 0, duration: 250, ease: 'easeOutQuad',
      },
      { delay: 1000, backgroundColor: '#fff' },
    ];
    this.pageEnterAnim = [
      {
        opacity: 0, duration: 0,
      },
      {
        height: 0,
        duration: 150,
        type: 'from',
        delay: 150,
        ease: 'easeOutQuad',
        onComplete: this.onEnd,
      },
      {
        opacity: 1, duration: 150, ease: 'easeOutQuad',
      },
    ];
    this.leaveAnim = [
      { duration: 250, opacity: 0 },
      { height: 0, duration: 200, ease: 'easeOutQuad' },
    ];
    this.pageLeaveAnim = [
      { duration: 150, opacity: 0 },
      { height: 0, duration: 150, ease: 'easeOutQuad' },
    ];
    this.data = [
      {
        key: 1,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
      {
        key: 2,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
      {
        key: 3,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
      {
        key: 4,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
      {
        key: 5,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
      {
        key: 6,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
      {
        key: 7,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
      {
        key: 8,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
      {
        key: 9,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
      {
        key: 10,
        number: 60090500000,
        prefix: 'นาย',
        name: 'John',
        surname: 'Brown',
      },
    ];

    this.animTag = ($props) => {
      return (
        <TableContext.Consumer>
          {(isPageTween) => {
            return (
              <TweenOneGroup
                component="tbody"
                enter={!isPageTween ? this.enterAnim : this.pageEnterAnim}
                leave={!isPageTween ? this.leaveAnim : this.pageLeaveAnim}
                appear={false}
                exclusive
                {...$props}
              />
            );
          }}
        </TableContext.Consumer>
      );
    };

    this.state = {
      data: this.data,
      isPageTween: false,
    };
  }

  onEnd = (e) => {
    const dom = e.target;
    dom.style.height = 'auto';
  }

  onAdd = () => {
    const { data } = this.state;
    const i = Math.round(Math.random() * (this.data.length - 1));
    data.unshift({
      key: Date.now(),
      name: this.data[i].name,
      age: this.data[i].age,
      address: this.data[i].address,
    });
    this.setState({
      data,
      isPageTween: false,
    });
  };

  onDelete = (key, e) => {
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({ data, isPageTween: false });
  }

  pageChange = () => {
    this.setState({
      isPageTween: true,
    });
  };
  render() {
  return (

    <Layout style={{minHeight: 700}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <br/><br/><br/><center><Avatar className="picture" size={80} icon={<UserOutlined />} 
      style={{
        backgroundColor: '#03ADB8',
      }} /></center>
      <br/><h2 style={{textAlign: 'center', color: 'white'}}>ชื่อ</h2>
      <h3 style={{textAlign: 'center' , color: 'white'}}>ตำแหน่ง</h3>
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
      <Content style={{ margin: '-10px 30px 0', background: '#E8E4E4'}}>
          
          <Divider orientation="left"><b>รายชื่อ</b></Divider>
            <Row justify="center" align="top">
            <Col span={15}>
            <div className="site-layout-background" style={{ padding: 16, background: '#E8E4E4', minHeight: 500 ,marginRight:'80px',marginLeft:'-50px'}}>
            <TableContext.Provider value={this.state.isPageTween}>
                <Table
                  columns={this.columns}
                  pagination={{ pageSize: 8 }}
                  dataSource={this.state.data}
                  className={`${this.props.className}-table`}
                  components={{ body: { wrapper: this.animTag } }}
                  onChange={this.pageChange}
                />
              </TableContext.Provider>
              </div>
            </Col>
            <Col span={7} style={{background: 'white', marginTop: '16px', minHeight: 450, marginLeft: '-120px'}}>
              <DemoBox value={40}>
                <div style={{ display: 'flex'}}><h4 style={{margin: 10}}><b>ข้อมูลผู้ป่วยรายบุคคล</b></h4>
                <Popover content={content} title="ประเภทผู้ป่วย" trigger="hover" icon={<InfoCircleOutlined />}>
                <InfoCircleOutlined style={{margin: 10, marginLeft: 130}}/>
                </Popover>
                </div>
                <div style={{margin: 10}}>
                  <h5 >ชื่อ-นามสกุล</h5>
                  <h5 >ปรับปรุงข้อมูลล่าสุด</h5>
                </div>
                <Row>
                  <Col span={8} order={1} style={{background: '#03ADB8',color: "white"}}>
                  <DemoBox value={100}>1</DemoBox>
                      
                    <center>SYS</center>
                  </Col>                 
                  <Col span={8} order={2} style={{background: '#03ADB8',color: "white"}}>
                  <DemoBox value={100}>2</DemoBox>
                    
                    <center>DIA</center>
                  </Col>
                  <Col span={8} order={3} style={{background: '#2CA900',color: "white"}}>
                  <DemoBox value={100}>3</DemoBox>
                    <center>ความดันเลือด</center>
                  </Col>
                  <Col span={12} order={4} style={{background: '#068550',color: "white"}}>
                  <DemoBox value={100}>4</DemoBox>
                    
                    <center>น้ำหนัก</center>
                    </Col>
                  <Col span={12} order={5} style={{background: '#403A2C',color: "white"}}>
                  <DemoBox value={100}>5</DemoBox>
                   
                    <center>ส่วนสูง</center>
                  </Col>                 
                  <Col span={24} order={6} style={{background: '#636161',color: "white"}}>
                  <DemoBox value={100}>6</DemoBox>
                    
                    <center>อุณหภูมิ</center>
                  </Col>
                </Row><br/>
                <h4 style={{margin: 10}}>สถานะ</h4>
                <center><button style={{background: 'black',color: 'white', width: '150px', height: '35px'}}>ดูข้อมูลทั้งหมด</button></center>
              </DemoBox>
            </Col>
          </Row>
        
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>

  );
  }
}
export default App;