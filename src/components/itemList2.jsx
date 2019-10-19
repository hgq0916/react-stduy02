import React from 'react';

import ItemCmt from "@/components/itemCmt2";

//导入css样式
import cssObj from "@/css/itemList.css";

console.log(cssObj);

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
      <h1 className={cssObj.title}>这是评论列表组件</h1>
      {this.state.itemList.map(item=><ItemCmt  key={item.id} {...item}></ItemCmt>)}
    </div>
  }
}

export default ItemList