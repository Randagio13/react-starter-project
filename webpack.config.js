var webpack = require('webpack');

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,
    entry: './app/app.jsx',
    output: {
        path: './build',
        filename: 'build.js',
        publicPath: '/'
    },
    module: {
        preLoaders: [{
            test: /\.jsx$/,
            loader: 'eslint-loader'
        }],
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.(png)$/, loader: 'url-loader'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactRouter: 'react-router'
        })
    ],
    devServer: {
        contentBase: './build',
        noInfo: true, //  --no-info option
        hot: false,
        inline: true
    }
};
