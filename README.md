### 构建过程

> 前言：为了加速开发效率，统一设置npm registry到taobao镜像。

1. 修改部分`gitignore`；

2. 添加webpack编译支持:

```shell
npm i -D webpack webpack-cli webpack-dev-server --registry=https://registry.npm.taobao.org
```

3. 一些资源相关webpack plugins，loaders:

```shell
npm i -D html-webpack-plugin file-loader --registry=https://registry.npm.taobao.org
```

4. react框架相关依赖：

```shell
npm i -S react react-dom redux react-redux react-router-dom connected-react-router  normalize.css --registry=https://registry.npm.taobao.org
```

5. css loader：

```shell
npm i -D style-loader css-loader postcss-loader autoprefixer postcss-simple-vars  postcss-import less less-loader --registry=https://registry.npm.taobao.org
```

6. babel:

```shell
npm i -D @babel/core babel-loader babel-preset-react-app --registry=https://registry.npm.taobao.org
npm i -S react-app-polyfill --registry=https://registry.npm.taobao.org
```