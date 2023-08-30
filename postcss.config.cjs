const cssnano = require('cssnano')
const atImports = require('postcss-import')

module.exports = {
	plugins: [
		atImports(),
		cssnano({
			preset: 'default',
		}),
	],
};
