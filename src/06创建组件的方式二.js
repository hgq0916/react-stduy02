//项目的入口文件
//console.log("yes");

//引入react
import React from 'react';
import ReactDOM from 'react-dom';

//导入组件
//import Hello from '@/components/hello'
//import "@/04 class实例变量和静态变量"
//import "@/05 class使用extends"
import Hello from "@/components/hello2.jsx"

const user = {
  name:"张三",
  age:30,
  gender:"男"
};

//渲染虚拟dom
ReactDOM.render(<div>
  {/*<Hello></Hello>*/}
  <Hello {...user}></Hello>
</div>,document.getElementById("app"));
