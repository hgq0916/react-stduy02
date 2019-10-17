//项目的入口文件
//console.log("yes");

//引入react
import React from 'react';
import ReactDOM from 'react-dom';

//创建虚拟dom元素
// 参数1 元素类型 参数2 元素属性 参数3 元素文本节点 参数4 元素其他子节点
const myh1 = React.createElement("h1",{"id":"myh1","title":"这是react创建的元素"},"这是一个大大的h1标签");
const mydiv = React.createElement("div",null,"这是一个div",myh1);
//渲染虚拟dom
ReactDOM.render(mydiv,document.getElementById("app"));