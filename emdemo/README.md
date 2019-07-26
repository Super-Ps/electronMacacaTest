创建项目步骤  
$ yarn create react-app YOUR_APP_NAME  
$ cd /PATH/TO/PROJECTS/YOUR_APP_NAME  
$ yarn add electron --dev  

package.json中lectron应用的入口文件，添加main配置：  
{  
  ...  
  "main": "public/electron.js",  
  ...  
}  

合并启动应用  

$ yarn add electron-is-dev  

$ yarn add concurrently --dev  
$ yarn add wait-on --dev  

修改package.json，添加一个electron-dev脚本命令：  
{  
  ...  
  "scripts": {  
    ...  
    "electron-dev": "concurrently \"BROWSER=none react-scripts start\" \"wait-on http://localhost:3000 && electron .\"",  
    ...  
  }  
  ...  
}  
执行一句yarn electron-dev就可以启动React + Electron应用了。  

应用打包  
yarn  add electron-builder --dev  

添加build配置  
  
执行打包  
$ yarn react-scripts build // 先用webpack打包React应用到`build`目录下  
$ yarn eletron-builder // 再用electron-builder打包Electron应用  




直接使用步骤  
$ yarn 安装全部依赖  
执行打包  
$ yarn react-scripts build   
$ yarn eletcron-builder  