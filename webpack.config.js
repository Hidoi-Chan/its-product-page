const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@blocks': path.resolve(__dirname, 'src/blocks'),
            '@scss': path.resolve(__dirname, 'src/scss'),
            '@images': path.resolve(__dirname, 'src/images'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.pug'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `style/${filename('css')}`
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {                    
                    pretty: isDev
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                exclude: [
                    path.resolve(__dirname, './src/fonts'),
                    path.resolve(__dirname, './src/icons'),
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images',
                        publicPath: '../assets/images',
                    }
                }
            },
            {
                test: /\.(woff2|woff|ttf|eot|svg)$/,
                include: [
                    path.resolve(__dirname, './src/fonts'),
                    path.resolve(__dirname, './src/icons'),
                    path.resolve(__dirname, 'node_modules'),
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts',
                        publicPath: '../assets/fonts',
                    },
                },
            }
        ]
    }
}