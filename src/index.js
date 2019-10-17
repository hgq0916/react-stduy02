//项目的入口文件
//console.log("yes");

//引入react
import React from 'react';
import ReactDOM from 'react-dom';

//导入组件
import Hello from '@/components/hello.jsx'
import "@/04 class实例变量和静态变量.js"

//渲染虚拟dom
ReactDOM.render(<div>
  <Hello></Hello>
</div>,document.getElementById("app"));
