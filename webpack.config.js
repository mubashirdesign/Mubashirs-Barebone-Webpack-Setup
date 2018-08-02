const path = require('path'); //absolute path for output
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
//ENTRY POINT, where webpack starts bundling i.e dependancies
 entry: ['babel-polyfill', './src/js/index.js'],

 //OUTPUT, where webpack saves the bundle
 output: {
 	path: path.resolve(__dirname, 'dist'), 
 	filename: 'js/bundle.js'
 },
 
 devServer: {
 	contentBase: './dist'
 },

 plugins: [

 new ExtractTextPlugin('css/styles.css'),

 new HtmlWebpackPlugin({

 	filename: 'index.html',
 	template: './src/index.html'

 }),


 new CopyWebpackPlugin([
            {from:'src/img',to:'img'} 
        ])


 ],

 	module: {

 		rules: [
 		{
 				//test all files ending with .js
 				test: /\.js$/,
 				exclude: /node_modules/,
 				use: {
 					loader: 'babel-loader'
 				}
 		},

 		{
                test:/\.(s*)css$/, 
                use: ExtractTextPlugin.extract({ 
                        fallback:'style-loader',
                        use:['css-loader','sass-loader'],
                    })
        }

 	]
}

};