import React from 'react';
import styles from "@/components/styles"

//封装一层
// const style1 = {border:"0.5px dashed",margin:"10px",padding:"10px"};
// const style2 = {fontSize:"25px"};
// const style3 = {fontSize:"15px"};

//封装两层
// const styles = {
//   style1:{border:"0.5px dashed",margin:"10px",padding:"10px"},
//   style2:{fontSize:"25px"},
//   style3:{fontSize:"15px"}
// };


//创建评论子组件
function ItemCmt(props) {
  return (
    <div style={styles.style1}>
      <h1 style={styles.style2}>评论人：{props.name}</h1>
      <p style={styles.style3}>评论内容：{props.content}</p>
    </div>
  )
}

export default ItemCmt