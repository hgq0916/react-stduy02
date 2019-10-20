import React from "react";

export default class MyBtn extends React.Component{
  constructor(){
    super();
    this.state = {
      user:"张三"
    };
  }

  render(){
    return <div>
      <button onClick={(e)=>{this.btnClick(e)}} ref="btn">按钮</button>
      <input type="text" name="user" value={this.state.user} onChange={(e)=>{this.userChanged(e)}}/>
    </div>
  }

  btnClick = (e)=>{
    console.log(e.target);
    console.log(this.refs.btn);
  }

  userChanged = (e)=>{
    console.log(e.target.value);
    this.setState({
      user:e.target.value
    });
  }
}