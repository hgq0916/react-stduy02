import React from "react";

//创建组件的方式二
class Hello extends React.Component {
  constructor(){
    super();
    this.state={
      addr:"中国"
    };
  }

  render(){
    return <div>Component--{this.props.name}--{this.props.age}--{this.props.gender}--{this.state.addr}</div>
  }

  static v1 = 1;
}

export default Hello