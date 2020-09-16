import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { Row, Col } from 'antd';
import Chart from './Chart';
import { NavLink } from 'react-router-dom';

class Graph extends React.Component {
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
      <div style={{ margin: '-10px 30px 0', background: '#E8E4E4'}}>
        <Divider orientation="left"><b>เพิ่มรายชื่อผู้ป่วย</b></Divider>
        <div className="site-layout-background" 
        style={{ padding: 8, background: '#FDFEFE', minHeight: 500, margin: '0px 65px 0'}}>
          <div style={{margin: 20}}>
          <Row>
            <Col span={8}>รหัสผู้ป่วย</Col>
            <Col span={8} push={4}>ชื่อ-นามสกุล</Col>
            <Col span={8} push={4}><NavLink to="/edit"><a>แก้ไขข้อมูลผู้ป่วย</a></NavLink></Col>
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
                </Row>
                <div style={{margin: 20}}>
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
  </div>
  );
  }
}
export default Graph;