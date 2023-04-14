// Sirve para identificar la ruta de donde se encuentra este archivo
const path = require('path');

// Me permite trabajar con documentos html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Extraer el código css, minificarlo y optimizarlo. Ademas lo agrega como parte del head
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Nos permite copiar archivos de una ruta a otra
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    return {
        entry: {
            index: './src/index.js',
            styles: './src/styles.js'
        },
        output: {
            filename: '[name].[contenthash].js',
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
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: 'assets/img/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                chunks: ['index', 'styles']
            }),
            // averiguar que significa un spread operator
            ...(isProduction ? [new MiniCssExtractPlugin({ filename: 'assets/css/[name].[contenthash].css' })] : []),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: './src/assets/img',
                        to: 'assets/img'
                    }
                ]
            })
        ],
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
