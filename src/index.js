//项目的入口文件
//console.log("yes");

//引入react
import React from 'react';
import ReactDOM from 'react-dom';

import MyBtn from "@/components/MyBtn.jsx";



//渲染虚拟dom
ReactDOM.render(<div>
  <MyBtn></MyBtn>
</div>,document.getElementById("app"));
