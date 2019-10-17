//项目的入口文件
//console.log("yes");

//引入react
import React from 'react';
import ReactDOM from 'react-dom';

//数字
const num = 10;
const str = "hahahaha";
const b = false;
const title = "ttt";
const ele  = <div><h1>h1标签</h1></div>
const elements = [
  <div key="haha">haha</div>,
  <div key="heihei">heihei</div>
];
const arr = ["张三","李四","王五"];
//渲染虚拟dom
ReactDOM.render(<div>
  {num+2}
  <hr/>
  {str}
  <hr/>
  {b?"true":"false"}
  <hr/>
  <p title={title}>p</p>
  <hr/>
  {ele}
  <hr/>
  {elements}
  <hr/>
  {arr.map(item=><span key={item}>{item}</span>)}
</div>,document.getElementById("app"));