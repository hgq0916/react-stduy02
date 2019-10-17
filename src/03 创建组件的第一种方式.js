//项目的入口文件
//console.log("yes");

//引入react
import React from 'react';
import ReactDOM from 'react-dom';

//创建组件的方式一
function Hello(props){
  console.log(props);
  return <div>hello---{person.name}---{person.age}---{person.gender}</div>;
}

const person = {
  name:"狄仁杰",
  age:50,
  gender:"男"
};

//渲染虚拟dom
ReactDOM.render(<div>
  <Hello {...person}></Hello>
</div>,document.getElementById("app"));


//todo es6
var v1 = {
  name:"zhangsan"
};

var v2 = {
  age:1,
  ...v1
}

console.log(v2);