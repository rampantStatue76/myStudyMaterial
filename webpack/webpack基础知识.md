# webpack

静态资源打包工具

### 为什么需要webpack

开发时，我们会使用框架（React、Vue），ES6 模块化语法，Less/Sass 等 css 预处理器等语法进行开发。

这样的代码要想在浏览器运行必须经过编译成浏览器能识别的 JS、Css 等语法，才能运行。

所以我们需要打包工具帮我们做完这些事。

除此之外，打包工具还能压缩代码、做兼容性处理、提升代码性能等。

##### 配置

- entry : 入口文件地址
- output: 输出位置，path，filename
- module: loaders
- plugin: 对打包流程的干预和增强
- mode
- resolve: 别名
- externals: 外部扩展

##### 常见的loader

- css-loader\style-loader\less-loader\sass-loader\sass
- 处理图片的file-loader\url-loader(已经内置，不需要下载)
- babel-loader: 将ES6+语法转换为ES5
- ts-loader/awesome-typescript-loader: 将ts转换为js

##### 常见的plugin

- `html-webpack-plugin`：自动生成 HTML 文件，并自动引入打包后的 JS/CSS。
- `clean-webpack-plugin`：打包前自动清除输出目录（如 `dist`）中的旧文件。
- `erser-webpack-plugin`：压缩 JavaScript 代码

##### 常见的plugin

##### loade和plugin的区别

- **loader：**可以理解为文件**转换器**，核心是解析，没有loader的话，只能打包基础的js文件，引入loader是为了来进行文件的处理
- **plugin：**可以理解为**扩展器**，扩展webpack的功能，实现对输出结果的加强

**区别：**

- loader 更专注于文件的转换，让webpack能打包处非js的模块，在打包之前起作用
- plugin更专注于流程的扩展，让输出资源的能力更丰富，在整个声明周期都起作用
