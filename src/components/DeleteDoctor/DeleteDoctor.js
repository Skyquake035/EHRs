import React from 'react';
import Table from 'antd/lib/table';
import { TweenOneGroup } from 'rc-tween-one';
import { Divider } from 'antd';
import PropTypes from 'prop-types';
import "./DeleteDoctor.css";

const TableContext = React.createContext(false);

class DeleteDoctor extends React.Component {
    static propTypes = {
        className: PropTypes.string,
      };
    
      static defaultProps = {
        className: 'table-enter-leave-demo',
      };
  constructor(props) {
    super(props);
    this.columns = [
      { title: 'รหัสประจำตัวแพทย์', dataIndex: 'number', key: 'number' },
      { title: 'คำนำหน้า', dataIndex: 'prefix', key: 'prefix' },
      { title: 'ชื่อ', dataIndex: 'name', key: 'name' },
      { title: 'นามสกุล', dataIndex: 'surname', key: 'surname' },
      { 
        title: 'การปรับปรุงแก้ไขข้อมูล',
        dataIndex: '',
        key: 'x',
        render: (text, record) => (
          <span
            className={`${this.props.className}-delete`}
            onClick={(e) => { this.onDelete(record.key, e); }}
          >
          <center style={{marginRight: 40}}>ลบรายชื่อ</center>  
          </span>
        ),
      },
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
    <div style={{ margin: '-10px 30px 0', background: '#E8E4E4'}}> 
        <Divider orientation="left"><b>ลบรายชื่อแพทย์</b></Divider>
        <div className="site-layout-background" 
        style={{ padding: 16, background: '#E8E4E4', minHeight: 500 , marginTop: '15px'}}>
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
    </div>
  );
  }
}
export default DeleteDoctor;