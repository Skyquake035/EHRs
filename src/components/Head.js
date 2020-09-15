import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { Search } = Input;

const { Header } = Layout;

class Head extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'table-enter-leave-demo',
  };

  render() {
  return (
    <div>
        <Header className="site-layout-sub-header-background" style={{padding: 0, minHeight: 60 }} >
        <div className={`${this.props.className}-nav`}>
            <span><img style={{margin: '6px'}} height="50" alt="img" src="../images/logo.PNG"/></span>
        </div>
        <div className={`${this.props.className}-action-bar`}>
          <Search           
            placeholder="ค้นหา" 
            onSearch={value => console.log(value)} 
            enterButton />
          </div>
        </Header> 
    </div>
  );
  }
}
export default Head;