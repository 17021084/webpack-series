# Webpack - from scratch 

* Course series: [ link ](https://www.youtube.com/watch?v=X1nxTjVDYdQ&list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z&ab_channel=SwashbucklingwithCode)

#### Package 
* __webpack__:  thư viện.
* __webpack-cli__: CLI để chạy 




##  Understanding Webpack 

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

* Nếu không có webpack buil ra 1 file js chung  thì khi  import ```barbarian.js``` và ```wizard.js``` vào file ```index.js``` thì phát sinh ra lỗi.
```
Uncaught SyntaxError: Cannot use import statement outside a module
```

* __Sử dụng webpack để build ra 1 file js chung__  (chú ý index.js phải để ở trong src/)<br>

```bash 
yarn add webpack webpack-cli

```