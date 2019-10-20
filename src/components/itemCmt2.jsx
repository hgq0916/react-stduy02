import React from 'react';

//导入css
import cssObj from "@/css/itemCmt.scss";

console.log(cssObj);

//创建评论子组件
function ItemCmt(props) {
  return (
    <div className={cssObj.cmt}>
      <h1 className={cssObj.user}>评论人：{props.name}</h1>
      <p className={cssObj.content}>评论内容：{props.content}</p>
    </div>
  )
}

export default ItemCmt