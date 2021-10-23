# Webpack - from scratch

- Course series: [ link ](https://www.youtube.com/watch?v=X1nxTjVDYdQ&list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z&ab_channel=SwashbucklingwithCode)

#### Package

- **webpack**: thư viện.
- **webpack-cli**: CLI để chạy

* Chạy js ở các browser cũ hơn.

- **@babel/core**: biên dịch js
- **@babel/preset-env**: Giúp babel chuyển đổi code ES6, ES7 và ES8 thành ES5.
- **babel-loader**: Load assets như css, images ...
- **webpack-dev-server**: Load assets như css, images ...

## Understanding Webpack

```
  |--src-|- barbarian.js
  |      |
  |      |- index.js
  |      |
  |      |- wizard.js
  |
  |
  |- index.html

```

- Nếu không có webpack buil ra 1 file js chung thì khi import `barbarian.js` và `wizard.js` vào file `index.js` thì phát sinh ra lỗi.

```
Uncaught SyntaxError: Cannot use import statement outside a module
```

- **Sử dụng webpack để build ra 1 file js chung** (chú ý index.js phải để ở trong src/)<br>

```bash
yarn add webpack webpack-cli
```

<br>
Chạy webpack: (chú ý index.js phải để ở trong src/)

```bash
  npx webpack
```

**output**

```bash
asset main.js 104 bytes [emitted] [minimized] (name: main)
orphan modules 66 bytes [orphan] 2 modules
./src/index.js + 2 modules 213 bytes [built] [code generated]
```

```js
//.dist/main.js
(() => {
  "use strict";
  console.log(" Ran from index.js"),
    console.log("wizard"),
    console.log("barbarian");
})();
```

=> Webpack sẽ build toàn bộ các module js về 1 file duy nhất.

## config webpack trung bình

```
  |--dist|- index.html
  |      |
  |      |- main.js
  |      |
  |      |- main.js.map
  |
  |--src-|- barbarian.js
  |      |
  |      |- index.js
  |      |
  |      |- wizard.js
  |
  |
  |- index.html (delete )

```

**Tải các package cần thiết**

```bash
  yarn add @babel/core @babel/preset-env babel-loader
```

- Tạo file config **webpack.config.js** và **.babelrc** <br>

```js
// index.js
const obj = {
  a: "abc",
  c: "cde",
};
const newObj = { ...obj, d: "char" };
console.log(newObj);
```

Tại các trình duyệt cũ không hỗ trợ `spread obj`. Khi build thì webpack đã tự tạo 1 function để lo việc đó

### Cài đặt mode

```bash
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

- sử dụng option `--watch` theo dõi thay đổi, hot reload giống nodemon

```js
"build": "rm -rf dist && webpack --watch"
```

### Tạo một dev server cho việc dev.

Thay vì việc ( f12-> source mở map file) thì tạo một live hot reload server

```bash
yarn add webpack-dev-server
```

Thêm option tại file `webpack.config.json`:

```js
 // hot reload server
  devServer: {
    // Content base nó bị outdate rồi dùng cái static
    // contentBase: "./dist",
    static :"./dist",
    compress: true,
    port: 9000, // port mà hot reload server định chạy
  },


```

## Chay lệnh thông qua env


* __package.json__
```js
"build": " NODE_ENV=production   webpack --watch" ,
 "build-dev": " NODE_ENV=development  webpack --watch"
```

* __webpack.config.js__

``` js
const mode =process.env.NODE_ENV === "production" ? "production" : "development";
```


### Khác 
[webpack-dev ](https://webpack.js.org/configuration/dev-server/#websockettransport)
* config devServer  cho các giao thức khác nhau có thể tìm ở đây.
