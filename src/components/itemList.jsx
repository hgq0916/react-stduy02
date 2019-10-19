import React from 'react';

import ItemCmt from "@/components/itemCmt";

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
      {this.state.itemList.map(item=><ItemCmt  key={item.id} {...item}></ItemCmt>)}
      
      {/*{this.state.itemList.map(item=>(<div key={item.id}><h1>评论人：{item.name}</h1><h3>评论内容：{item.content}</h3></div>))} */}
    </div>
  }
}

export default ItemList