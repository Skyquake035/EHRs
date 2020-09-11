import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EditOutlined, UserAddOutlined ,UserDeleteOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import {
  Form,
  Select,
  Row,
  Col,
  Divider,
} from 'antd';

const { Search } = Input;

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
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
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <br/><br/><br/><center><Avatar className="picture" size={80} icon={<UserOutlined />} /></center>
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
          
          
              <Divider orientation="left"><b>แก้ไขข้อมูลผู้ป่วย</b></Divider>
        <div className="site-layout-background" style={{ padding: 16, background: '#FDFEFE', minHeight: 500, margin: '50px'}}>
        <h4 style={{margin: 28}}><b>ข้อมูลการลงทะเบียน</b></h4>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <div style={{marginLeft: 30}}>
            <Row>
              <Col span={12}><Form.Item style={{width: 700}}>
              <label htmlFor="username">ชื่อผู้ใช้งาน</label>
                <Input />
              </Form.Item></Col>
              <Col span={12}><Form.Item style={{width: 700}}>
              <label htmlFor="password">รหัสผ่าน</label>
                <Input />
              </Form.Item></Col>
            </Row>
              
              <h4><b>ข้อมูลส่วนตัว</b></h4><br />
              <Row>
              <Col span={8}><Form.Item style={{width: 200}}>
              <label htmlFor="prefix">คำนำหน้า</label>
                <Select>
                    <Select.Option value="mr">นาย</Select.Option>
                    <Select.Option value="mrs">นาง</Select.Option>
                    <Select.Option value="ms">นางสาว</Select.Option>
                  </Select>
              </Form.Item></Col>
              <Col span={8}  pull={4}><Form.Item style={{width: 433}}>
              <label htmlFor="name">ชื่อ</label>
                <Input />
              </Form.Item></Col>
              <Col span={8} pull={4}><Form.Item style={{width: 433}}>
              <label htmlFor="surname">นามสกุล</label>
                <Input />
              </Form.Item></Col>
            </Row>

            <Row>
            <Col span={8}><Form.Item style={{width: 200}}>
            <label htmlFor="age">อายุ</label>
                <Input placeholder="ปี" style={{textAlign: "right"}} />
              </Form.Item></Col>
              <Col span={8}  pull={2}><Form.Item style={{width: 300}}>
              <label htmlFor="weight">น้ำหนัก</label>
                <Input placeholder="กิโลกรัม" style={{textAlign: "right"}} />
              </Form.Item></Col>
              <Col span={8}  pull={4}><Form.Item style={{width: 300}}>
              <label htmlFor="height">ส่วนสูง</label>
                <Input placeholder="เซนติเมตร" style={{textAlign: "right"}} />
              </Form.Item></Col>
            </Row>

            <Row>
            <Col span={8}><Form.Item style={{width: 700}}>
            <label htmlFor="location">ที่อยู่ปัจจุบัน</label>
                <Input />
              </Form.Item></Col>
              <Col span={8} push={4}><Form.Item style={{width: 200}}>
              <label htmlFor="district1">ตำบล</label>
                <Input/>
              </Form.Item></Col>
              <Col span={8}><Form.Item style={{width: 200}}>
              <label htmlFor="district2">อำเภอ</label>
                <Input/>
              </Form.Item></Col>  
            </Row>

            <Row>
            <Col span={8}><Form.Item style={{width: 300}}>
            <label htmlFor="province">จังหวัด</label>
              <Select>
                <Select.Option value="กรุงเทพมหานคร">กรุงเทพมหานคร</Select.Option>
                <Select.Option value="กระบี่">กระบี่</Select.Option>
                <Select.Option value="กาญจนบุรี">กาญจนบุรี</Select.Option>
                <Select.Option value="กาฬสินธุ์">กาฬสินธุ์</Select.Option>
                <Select.Option value="กำแพงเพชร">กำแพงเพชร</Select.Option>
                <Select.Option value="ขอนแก่น">ขอนแก่น</Select.Option>
                <Select.Option value="จันทบุรี">จันทบุรี</Select.Option>
                <Select.Option value="ฉะเชิงเทรา">ฉะเชิงเทรา</Select.Option>
                <Select.Option value="ชลบุรี">ชลบุรี</Select.Option>
                <Select.Option value="ชัยนาท">ชัยนาท</Select.Option>
                <Select.Option value="ชัยภูมิ">ชัยภูมิ</Select.Option>
                <Select.Option value="ชุมพร">ชุมพร</Select.Option>
                <Select.Option value="เชียงราย">เชียงราย</Select.Option>
                <Select.Option value="เชียงใหม่">เชียงใหม่</Select.Option>
                <Select.Option value="ตรัง">ตรัง</Select.Option>
                <Select.Option value="ตราด">ตราด</Select.Option>
                <Select.Option value="ตาก">ตาก</Select.Option>
                <Select.Option value="นครนายก">นครนายก</Select.Option>
                <Select.Option value="นครปฐม">นครปฐม</Select.Option>
                <Select.Option value="นครพนม">นครพนม</Select.Option>
                <Select.Option value="นครราชสีมา">นครราชสีมา</Select.Option>
                <Select.Option value="นครศรีธรรมราช">นครศรีธรรมราช</Select.Option>
                <Select.Option value="นครสวรรค์">นครสวรรค์</Select.Option>
                <Select.Option value="นนทบุรี">นนทบุรี</Select.Option>
                <Select.Option value="นราธิวาส">นราธิวาส</Select.Option>
                <Select.Option value="น่าน">น่าน</Select.Option>
                <Select.Option value="บึงกาฬ">บึงกาฬ</Select.Option>
                <Select.Option value="บุรีรัมย์">บุรีรัมย์</Select.Option>
                <Select.Option value="ปทุมธานี">ปทุมธานี</Select.Option>
                <Select.Option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</Select.Option>
                <Select.Option value="ปราจีนบุรี">ปราจีนบุรี</Select.Option>
                <Select.Option value="ปัตตานี">ปัตตานี</Select.Option>
                <Select.Option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</Select.Option>
                <Select.Option value="พังงา">พังงา</Select.Option>
                <Select.Option value="พัทลุง">พัทลุง</Select.Option>
                <Select.Option value="พิจิตร">พิจิตร</Select.Option>
                <Select.Option value="พิษณุโลก">พิษณุโลก</Select.Option>
                <Select.Option value="เพชรบุรี">เพชรบุรี</Select.Option>
                <Select.Option value="เพชรบูรณ์">เพชรบูรณ์</Select.Option>
                <Select.Option value="แพร่">แพร่</Select.Option>
                <Select.Option value="พะเยา">พะเยา</Select.Option>
                <Select.Option value="ภูเก็ต">ภูเก็ต</Select.Option>
                <Select.Option value="มหาสารคาม">มหาสารคาม</Select.Option>
                <Select.Option value="มุกดาหาร">มุกดาหาร</Select.Option>
                <Select.Option value="แม่ฮ่องสอน">แม่ฮ่องสอน</Select.Option>
                <Select.Option value="ยะลา">ยะลา</Select.Option>
                <Select.Option value="ยโสธร">ยโสธร</Select.Option>
                <Select.Option value="ร้อยเอ็ด">ร้อยเอ็ด</Select.Option>
                <Select.Option value="ระนอง">ระนอง</Select.Option>
                <Select.Option value="ระยอง">ระยอง</Select.Option>
                <Select.Option value="ราชบุรี">ราชบุรี</Select.Option>
                <Select.Option value="ลพบุรี">ลพบุรี</Select.Option>
                <Select.Option value="ลำปาง">ลำปาง</Select.Option>
                <Select.Option value="ลำพูน">ลำพูน</Select.Option>
                <Select.Option value="เลย">เลย</Select.Option>
                <Select.Option value="ศรีสะเกษ">ศรีสะเกษ</Select.Option>
                <Select.Option value="สกลนคร">สกลนคร</Select.Option>
                <Select.Option value="สงขลา">สงขลา</Select.Option>
                <Select.Option value="สตูล">สตูล</Select.Option>
                <Select.Option value="สมุทรปราการ">สมุทรปราการ</Select.Option>
                <Select.Option value="สมุทรสงคราม">สมุทรสงคราม</Select.Option>
                <Select.Option value="สมุทรสาคร">สมุทรสาคร</Select.Option>
                <Select.Option value="สระแก้ว">สระแก้ว</Select.Option>
                <Select.Option value="สระบุรี">สระบุรี</Select.Option>
                <Select.Option value="สิงห์บุรี">สิงห์บุรี</Select.Option>
                <Select.Option value="สุโขทัย">สุโขทัย</Select.Option>
                <Select.Option value="สุพรรณบุรี">สุพรรณบุรี</Select.Option>
                <Select.Option value="สุราษฎร์ธานี">สุราษฎร์ธานี</Select.Option>
                <Select.Option value="สุรินทร์">สุรินทร์</Select.Option>
                <Select.Option value="หนองคาย">หนองคาย</Select.Option>
                <Select.Option value="หนองบัวลำภู">หนองบัวลำภู</Select.Option>
                <Select.Option value="อ่างทอง">อ่างทอง</Select.Option>
                <Select.Option value="อุดรธานี">อุดรธานี</Select.Option>
                <Select.Option value="อุทัยธานี">อุทัยธานี</Select.Option>
                <Select.Option value="อุตรดิตถ์">อุตรดิตถ์</Select.Option>
                <Select.Option value="อุบลราชธานี">อุบลราชธานี</Select.Option>
                <Select.Option value="อำนาจเจริญ">อำนาจเจริญ</Select.Option>
              </Select>
              </Form.Item></Col>
              <Col span={8} pull={2}><Form.Item style={{width: 300}}>
              <label htmlFor="postalCode">รหัสไปรษณีย์</label>
                <Input/>
              </Form.Item></Col>
              <Col span={8} pull={4}><Form.Item style={{width: 300}}>
              <label htmlFor="house">เบอร์บ้าน</label>
                <Input/>
              </Form.Item></Col>  
            </Row>

            <Row>
            <Col span={12}><Form.Item style={{width: 500}}>
            <label htmlFor="number">เบอร์โทรศัพท์มือถือ</label>
                <Input />
              </Form.Item></Col>
              <Col span={12}><Form.Item style={{width: 500}}>
              <label htmlFor="email">อีเมล</label>
                <Input/>
              </Form.Item></Col>
            </Row>

            <Row>
            <Col span={24}><Form.Item style={{width: 700}}>
            <label htmlFor="disease">โรคประจำตัว</label>
                <Input />
              </Form.Item></Col>
            </Row>

            <Row>
            <Col span={12}><Form.Item style={{width: 500}}>
            <label htmlFor="drug">ยาที่แพ้</label>
                <Input />
              </Form.Item></Col>
            <Col span={12}><Form.Item style={{width: 500}}>
            <label htmlFor="food">อาหารที่แพ้</label>
                <Input />
              </Form.Item></Col>
            </Row>
      
            <h4><b>ข้อมูลทางการแพทย์</b></h4><br />
            <Form.Item style={{width: 1500}}>
            <label htmlFor="diagnosis">การวินิฉัยโรค</label>
              <Input />
            </Form.Item>
            <br/><Form.Item>
              <Button className="button" style={{ color:"white" ,marginLeft: "70%" }}>ยืนยันการแก้ไขข้อมูล</Button>
            </Form.Item>
            </div>
          </Form>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>

  );
  }
}
export default App;