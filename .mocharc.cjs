// See https://github.com/mochajs/mocha/blob/master/example/config/.mocharc.js
module.exports = {
	bail: true,
	exit: true,
	'forbid-only': true,
	'forbid-pending': true,
	parallel: true,
	recursive: true,
	require: [
		'./test/require.js'
	],
	reporter: 'nyan',
};
