const path = require ("path");
const webPackPlugin = require ("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require ("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpg?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[contenthash].[ext]',
                    outputPath: 'assets/images/' ,
                    publicPath: 'assets/images/' 
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'  
        }),
        new miniCssExtractPlugin ({
            filename: 'style.css'
        })
    ]
}