import React from 'react';
import './doctor.css';
import { Layout } from 'antd';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EditOutlined, UserAddOutlined ,UserDeleteOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import Chart from './components/Chart';

const { Search } = Input;

const { Header, Footer, Sider, Content } = Layout;

class graph extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

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
          <Divider orientation="left"><b>เพิ่มรายชื่อผู้ป่วย</b></Divider>
        <div className="site-layout-background" style={{ padding: 16, background: '#FDFEFE', minHeight: 500, margin: '50px'}}>
          <h4 style={{margin: 16}}><b>ข้อมูลการลงทะเบียน</b></h4><br />
          <div style={{marginLeft: 16}}>
          <Row>
            <Col span={12}>รหัสผู้ป่วย</Col>
            <Col span={12}>ชื่อ-นามสกุล</Col>
          </Row>  
          <Row>
            <Col span={24} offset={12}>อายุ</Col>
          </Row>
          <Row>
            <Col span={12}>อาการป่วย</Col>
            <Col span={12}>อาหารที่แพ้</Col>
          </Row>  
          <Row>
            <Col span={12}>โรคประจำตัว</Col>
            <Col span={12}>ยาที่แพ้</Col>
          </Row><br/>
          </div>
          <Row>
                  <Col span={4} order={1} style={{background: '#03ADB8',color: "white"}}>
                    12
                    <h4 style={{float: "right",color: "white"}}>mmHg</h4>
                    <center>SYS</center>
                  </Col>                 
                  <Col span={4} order={2} style={{background: '#03ADB8',color: "white"}}>
                    2
                    <h4 style={{float: "right",color: "white"}}>mmHg</h4>
                    <center>DIA</center>
                  </Col>
                  <Col span={4} order={3} style={{background: '#2CA900',color: "white"}}>
                    3
                    <center>ความดันเลือด</center>
                  </Col>
                  <Col span={4} order={4} style={{background: '#068550',color: "white"}}>
                    4
                    <h4 style={{float: "right",color: "white"}}>กก.</h4>
                    <center>น้ำหนัก</center>
                    </Col>
                  <Col span={4} order={5} style={{background: '#403A2C',color: "white"}}>
                    5
                    <h4 style={{float: "right",color: "white"}}>ซม.</h4>
                    <center>ส่วนสูง</center>
                  </Col>                 
                  <Col span={4} order={6} style={{background: '#636161',color: "white"}}>
                    6
                    <h4 style={{float: "right",color: "white"}}>องศาเซลเซียส</h4>
                    <center>อุณหภูมิ</center>
                  </Col>
                </Row><br/>
                <div style={{marginLeft: 16}}>
                <h4>สถิติค่าความดันเลือด</h4>

                <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>

                <Row>
                  <Col span={12}>สถิติอัตราการเต้นหัวใจ</Col>
                  <Chart chartData={this.state.chartData} legendPosition="bottom"/>
                  <Col span={12}>สถิติน้ำหนัก</Col>
                  <Chart chartData={this.state.chartData} legendPosition="bottom"/>
                </Row>
                </div>
        </div>
      </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>       
  </Layout>

  );
  }
}
export default graph;