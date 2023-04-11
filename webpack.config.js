// Sirve para identificar la ruta de donde se encuentra este archivo
const path = require('path');

// Me permite trabajar con documentos html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Extraer el código css, minificarlo y optimizarlo. Ademas lo agrega como parte del head
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Nos permite copiar archivos de una ruta a otra
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    // operadores en javascript, que diferencia existe entre el operador == y el ===
    const isProduction = argv.mode === 'production';
    return {
        entry: {
            index: './src/index.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src/assets/js'),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            open: true,
            hot: true,
            watchFiles: [
                'src/**/*'
            ]
        }
    };
}


// const name = 'yhoan';

// if (name == 'yhoana') {
//     console.log('La persona si se llama yhoana');
// } else {
//     console.log('La persona no se llama yhoana');
// }

// // If ternario
// console.log(name == 'yhoana' ? 'La persona si se llama yhoana' : 'La persona no se llama yhoana');



// console.log('La persona ' + name == 'yhoana' ? 'si' : 'no' + ' se llama yhoana');

// // Template literals
// console.log(`La persona ${name == 'yhoana' ? 'si' : 'no'} se llama yhoana`);