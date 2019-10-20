//项目的入口文件
//console.log("yes");

//引入react
import React from 'react';
import ReactDOM from 'react-dom';

import ItemList from "@/components/itemList2"



//渲染虚拟dom
ReactDOM.render(<div>
  <ItemList></ItemList>
</div>,document.getElementById("app"));
