import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Footer } = Layout;

class Foot extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'table-enter-leave-demo',
  };

  render() {
  return (
    <div>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </div>

  );
  }
}
export default Foot;