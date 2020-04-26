// npx webpack --config webpack.config.prod.js
// webpack.config.prod로 파일을 나눠서 mode: 'production' 모드를 사용할때 webpack.config 파일을 수정하는것보다 편하게 사용이 가능해진다

const path = require('path');
module.exports = {
	mode: 'production',
	entry: './source/index.js',
	output: {
		path: path.resolve(__dirname, 'public'), // __dirname node.js에서 정해진 공식같은 코드이다 의미는 이 파일이 있는 path를 찾는 값으로 기억함
		filename: 'index_bundler.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};