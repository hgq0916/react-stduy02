const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var htmlWebpackPlugin = new HtmlWebpackPlugin({
  template:path.join(__dirname,"/src/index.html"),
  filename:"index.html"
});
module.exports = {
  mode:"development",
  plugins:[

    htmlWebpackPlugin
  ],
  module:{
    rules:[
      {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
      {test:/\.css$/,use:[
        {
          loader:"style-loader"
        },
        {
          loader:"css-loader"
        }
      ]
    },
    {
      test:/\.ttf|woff2|woff|eot|svg/,
      use:["url-loader"]
    },
    {
      test:/\.scss/,
      use:[{
        loader:"style-loader"
      },
      {
        loader:"css-loader",
        options:{
          modules:{
            localIdentName:"[path][name]-[local]-[hash:5]"
          }
        }
      },
        {
        loader:"sass-loader"
      }]
    }
  ]
},
resolve:{
  extensions:[".js",".jsx",".json"],
  alias:{
    "@":path.join(__dirname,"/src")
  }
}
}