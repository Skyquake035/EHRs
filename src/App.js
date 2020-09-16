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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Content } = Layout;

class App extends React.Component {
  render() {
  return (
    <Router>
    <Layout style={{minHeight: 700 , background:'white'}}>
      <Navbar/>
      <Layout style={{background: '#E8E4E4' }}>
        <Head/>
        <Content style={{ margin: '0px 0px 0', background: '#E8E4E4',minHeight: 600}}>
        <Route exact path="/">
          <Member />
          </Route>
          <Route path="/add">
          <Add />
          </Route>
          <Route path="/patient">
          <Patient />
          </Route>
          <Route path="/delete">
          <DeleteDoctor />
        </Route>
        </Content>
        <Foot/> 
      </Layout>            
    </Layout>
    </Router>
  );
  }
}
export default App;