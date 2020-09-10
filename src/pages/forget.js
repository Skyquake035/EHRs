import React, { Component } from "react";
import "./App.css";
import { Layout } from 'antd';

const { Footer } = Layout;

class App extends Component {


  render() {

    return (
      <Layout>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>ลืมรหัสผ่าน</h1>
          <h3>ติดต่อสอบถามที่ 0950000000</h3>

        </div>
      </div>
      <Footer style={{ textAlign: 'center', background: '#17202A', color:"white" }}>Obodroid Limited Corporation</Footer>
      </Layout>
    );
  }
}

export default App;