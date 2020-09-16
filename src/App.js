import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Head from './components/Head';
import Foot from './components/Foot';
import DeleteDoctor from './components/DeleteDoctor';
import Edit from './components/Edit';
import Graph from './components/Graph';
import Member from './components/Member';
import Add from './components/Add';
import Patient from './components/Patient';

const { Content } = Layout;

class App extends React.Component {
  render() {
  return (
    <Layout style={{minHeight: 700 , background:'white'}}>
      <Navbar/>
      <Layout style={{background: '#E8E4E4' }}>
        <Head/>
        <Content style={{ margin: '0px 0px 0', background: '#E8E4E4',minHeight: 600}}>
          <Patient/>  
        </Content>
        <Foot/> 
      </Layout>            
    </Layout>
  );
  }
}
export default App;