### Front-end scaffold planning

### Introduction

提供诸多开箱即用的功能

### Target

* 优化丨极致性能体验，前端性能优化，永无止境。  
* 协作丨为团队提供愉悦的开发体验，提供前端开发脚手架的技术支持，专人维护解决脚手架问题
* 统一丨统一风格，统一代码规范，统一技术栈，减少代码冲突
* 效率丨让团队成员只需要简单培训学习使用这套框架，将精力主要放在业务需求开发上，
  而不需要额外学习研究webpack，jsx，babel，node，shell,express等等一堆概念与知识

### Technology stack

* babel
* express
* node
* npm 
* PM2
* postCSS
* react-hot-loader
* webpack
* Etc，etc

### Feature

#### Done 

- [x] 基础功能
   - [x] 打包 --打包合并，压缩混淆html,css,js
   - [x] 代码切割 --分离第三方包与业务逻辑代码
   - [x] 环境分离 --production, development, debug model
   - [x] 支持单页面，多页面应用
   - [x] html页面模板，动态生成页面
   - [ ] support sass, less, postCSS(recommend)
- [x] 高级功能
   - [x] 热更新 --不需要刷新页面，尤其连续改一个功能不需要重复做页面操作
   - [x] 源码映射 --追踪错误代码到开发源码的错误一行
   - [x] 打包监测 --分析打包性能，模块内容
   - [x] 局域网访问  --开启局域网访问
   - [x] 版本管理 --小版本携带版本号+时间戳，大版本使用版本号(字母)
   - [x] 重定向依赖 --使用第三方包提供的压缩包而不是通过webpack   
- [x] 可选功能  
   - [ ] reload VS Hot Module Replacement(recommend)
   - [ ] externals VS resolve VS require

#### Doing

- [ ] 加载策略
   - [ ] 按需加载/异步加载
   - [ ] 并线加载/同步执行
   - [ ] 预加载
- [ ] 优化策略 
   - [ ] 生产环境优化
   - [ ] 删除热更新模块
   - [ ] 删除调试信息
   - [ ] 清理重复cssClass等等
   - [ ] 首屏内联样式
   - [ ] 浏览器兼容性: IE系列,html5shim,css,js,
- [ ] 代码测试
   - [ ] .eslintrc, eslint
   - [ ] .editconfig --统一编辑器格式，减少代码冲突
- [ ] server
   - [ ] docker
   - [ ] mock  --mock data
   - [ ] 外网访问  --端口映射
   - [ ] 自动化部署  -- 一键推送线上
- [ ] others
   - [x] 支持markdown
   - [ ] 编写shell脚本，制作命令行界面（CLI）
   - [ ] 发布到Npm, Bower
