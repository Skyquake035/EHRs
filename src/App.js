import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Head from './components/Head';
import Foot from './components/Foot';

const { Content } = Layout;

class App extends React.Component {
  render() {
  return (
    <Layout style={{minHeight: 700 , background:'white'}}>
      <Navbar/>
      <Layout style={{background: '#E8E4E4'}}>
        <Head/>
        <Content style={{ margin: '0px 0px 0', background: '#E8E4E4'}}>
          
        </Content>
        <Foot/> 
      </Layout>            
    </Layout>
  );
  }
}
export default App;