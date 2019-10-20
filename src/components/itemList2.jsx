import React from 'react';

import ItemCmt from "@/components/itemCmt2";

//导入css样式
import cssObj from "@/css/itemList.scss";

//导入第三方的css样式
import bootCss from "bootstrap/dist/css/bootstrap.css";

console.log("bootCss:",bootCss);

//创建评论组件
class ItemList extends React.Component{
  constructor(){
    super();
    this.state = {
      itemList:[
        {id:1,name:"zhangsan",content:"一楼"},
        {id:2,name:"lisi",content:"沙发"},
        {id:3,name:"wangwu",content:"板凳"}
      ]
    };
  }

  render(){
    return <div>
      <button className={["btn","btn-primary"].join(" ")}>按钮</button>
      <div className="panel panel-primary"></div>
      {/* <h1 className={cssObj.title+" "+cssObj.test}>这是评论列表组件</h1> */}
      <h1 className={[cssObj.title,"test"].join(" ")}>这是评论列表组件</h1>
      {this.state.itemList.map(item=><ItemCmt  key={item.id} {...item}></ItemCmt>)}
    </div>
  }
}

export default ItemList