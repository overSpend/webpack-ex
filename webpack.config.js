// npx webpack || npx webpack --config webpack.config.js
// webpack.config.js라는 정해진 이름을 사용하면 npx webpack 명령어를 입력했을때 이 파일을 디폴트값으로 찾는다
// mode는 development 모드이다

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './source/index.js',
		about: './source/about.js'
	},
	output: {
		path: path.resolve(__dirname, 'public'), // __dirname node.js에서 정해진 공식같은 코드이다 의미는 이 파일이 있는 path를 찾는 값으로 기억함
		filename: '[name]_bundler.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './source/index.html',
			filename: './index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			template: './source/about.html',
			filename: './about.html',
			chunks: ['about']
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};