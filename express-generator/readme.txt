### 一、创建express框架： ###

	1.安装express-generator：
		$ npm install express-generator -g

	2.在当前工作目录下创建一个命名为 myapp 的应用：
		$ express myapp

	3.然后安装所有依赖包：
		$ cd myapp 
		$ npm install

	4.Windows 平台启动服务：
		$ set DEBUG=myapp & npm start

	5.然后在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了。

	生成如下目录：
		.
		├── app.js 					入口文件
		├── bin
		│   └── www 				启动文件（默认设置启动的端口号为：3000）
		├── package.json 			项目依赖配置及开发者信息
		├── public 					静态文件如 css,js,img (PS:习惯叫static)
		│   ├── images
		│   ├── javascripts
		│   └── stylesheets
		│       └── style.css
		├── routes 					路由文件
		│   ├── index.js
		│   └── users.js
		└── views 					页面文件(Ejs或者jade的模板，默认是jade，习惯用Ejs)
		    ├── error.ejs
		    ├── index.ejs
		    ├── header.ejs
		    └── footer.ejs

	注意： 1. 使用ejs时，要安装ejs
			 $ npm install ejs --save

		  2. app.js文件修改以下内容：
		  	 app.set('view engine', 'ejs');
