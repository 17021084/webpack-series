# Webpack - from scratch 

* Course series: [ link ](https://www.youtube.com/watch?v=X1nxTjVDYdQ&list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z&ab_channel=SwashbucklingwithCode)


## Styles trong Webpack.

Bình thường webpack sẽ ko build đc styles. Phải cài các plugins tuỳ từng styles vào 

```bash
  yarn add css-loader style-loader webpack webpack-cli
```

* style-loader: build ra thẻ <style>
* css-loader: load file css 

setup rule trong file ```webpack.config.js```

Th

