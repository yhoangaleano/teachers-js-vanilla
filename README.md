
# Nuevo Proyecto Web 

Este documento explica cómo iniciar un proyecto web desde cero utilizando Webpack, Babel y otras herramientas para la construcción y el desarrollo. 

## Requisitos previos Asegúrate de tener instalado 

[Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) en tu sistema antes de comenzar. Con los siguientes comandos verificamos las instalaciones: 

- ``node --version``
- ``npm --version``

## Iniciar un nuevo proyecto  

1. Crea una nueva carpeta para tu proyecto:

    ``mkdir mi-proyecto``
    ``cd mi-proyecto``

Reemplaza `mi-proyecto` con el nombre que desees para tu proyecto. 

2. Ejecuta el siguiente comando para inicializar un nuevo proyecto Node.js y crear un archivo `package.json`:

``npm init -y``

Esto generará un archivo `package.json` con la configuración básica. Puedes editar este archivo más tarde para agregar una descripción, autor y otras metadatos del proyecto. 

3. Instala las dependencias de desarrollo necesarias ejecutando los siguientes comandos:

``npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin mini-css-extract-plugin css-loader style-loader url-loader babel-loader @babel/core @babel/preset-env copy-webpack-plugin``

4. Instala las dependencias de producción necesarias ejecutando los siguientes comandos:

``npm install bootstrap @fortawesome/fontawesome-free alertifyjs sweetalert2``

5. Crea un archivo `webpack.config.js` en la raíz del proyecto y añade la configuración básica de Webpack. 
Por ejemplo: 

``
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
module.exports = { entry: './src/index.js', output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js', }, module: { rules: [ { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'], }, }, }, { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'], }, { test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/, use: [ { loader: 'url-loader', options: { limit: 10000, name: '[name].[ext]', outputPath: 'assets/', }, }, ], }, ], }, plugins: [ new HtmlWebpackPlugin({ template: './src/index.html', }), new MiniCssExtractPlugin({ filename: '[name].css', }), ], devServer: { contentBase: path.join(__dirname, 'dist'), compress: true, port: 8080, }, };``

6.  Crea una carpeta `src` en la raíz del proyecto y añade los archivos necesarios para tu proyecto (por ejemplo, `index.html`, `index.js`, archivos CSS, imágenes, etc.).
    
