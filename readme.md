# Webpack - from scratch 

* Course series: [ link ](https://www.youtube.com/watch?v=X1nxTjVDYdQ&list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z&ab_channel=SwashbucklingwithCode)

### Regex

```js

//css
/\.css$/i,
// scss
/\.scss$/i,

 
```


## Styles trong Webpack.

Bình thường webpack sẽ ko build đc styles. Phải cài các plugins tuỳ từng styles vào 

```bash
  yarn add css-loader style-loader webpack webpack-cli
```

* style-loader: build ra thẻ <style>
* css-loader: load file css 

setup rule trong file ```webpack.config.js```

## Sass 

```bash
yarn add sass sass-loader
```

add them rule vao file ```webpack.config.js```

## mini-css-extract-plugin
bình thường thì sẽ build hết vào trong main.js. tuy nhiên cài plugin này nó build hết css vào 1 file 

** them plugin 
```bash
yarn add mini-css-extract-plugin
```
