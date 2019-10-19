import React from 'react';

//创建评论子组件
function ItemCmt(props) {
  return <div><h1>评论人：{props.name}</h1><h3>评论内容：{props.content}</h3></div>
}

export default ItemCmt