const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        clean: true,
        //publicPath: '/dist/',
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /\//, to: '/404.html' }],
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devtool: process.argv.indexOf('-p') === -1 ? 'eval-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },

                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    optimization:
        process.argv.indexOf('-p') === -1
            ? {}
            : {
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        terserOptions: {
                            output: {
                                comments: false,
                            },
                        },
                        extractComments: false,
                    }),
                ],
            },
}