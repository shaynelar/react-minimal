export default {
	name: "react-minimal",
	version: "0.0.1",
	description: "Template file",
	type: "commonjs",
	scripts: {
		dev: "webpack-dev-server --mode development",
	},
	dependencies: {
		react: "^17.0.2",
		"react-dom": "^17.0.2",
		"@babel/cli": "^7.17.0",
		"@babel/core": "^7.17.2",
		"@babel/preset-env": "^7.16.11",
		"@babel/preset-react": "^7.16.7",
		"@babel/preset-typescript": "^7.16.7",
		"@types/react": "^17.0.39",
		"@types/react-dom": "^17.0.11",
		"babel-loader": "^8.2.3",
		"css-loader": "^6.6.0",
		"style-loader": "^3.3.1",
		"ts-loader": "^9.2.6",
		typescript: "^4.5.5",
		webpack: "^5.68.0",
		"webpack-cli": "^4.9.2",
		"webpack-dev-server": "^4.7.4",
	},
	repository: {
		type: "git",
		url: "git+https://github.com/shaynelar/react-toolchain.git",
	},
	author: "shaynel",
	license: "MIT",
	bugs: {
		url: "https://github.com/shaynelar/react-toolchain/issues",
	},
	homepage: "https://github.com/shaynelar/react-toolchain#readme",
};
