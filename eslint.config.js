import globals from 'globals'
import standardImport from 'eslint-plugin-import'
import js from '@eslint/js'
import mocha from 'eslint-plugin-mocha'
import n from 'eslint-plugin-n'
import standardPromise from 'eslint-plugin-promise'
import standard from 'eslint-config-standard'

const mochaRecommededConfig = Object.assign({}, mocha.configs.recommended)
mochaRecommededConfig.plugins = { mocha }
delete mochaRecommededConfig.env

const standardConfig = Object.assign({}, standard)
delete standardConfig.env
delete standardConfig.globals
delete standardConfig.parserOptions
standardConfig.plugins = {
	import: standardImport,
	n,
	promise: standardPromise,
	standard
}

export default [
	js.configs.recommended,
	mochaRecommededConfig,
	standardConfig,
	{
		languageOptions: {
			ecmaVersion: 2023,
			globals: {
				...globals.browser,
				...globals.node,
				...standard.globals,
				afterEach: true,
				beforeEach: true,
				describe: true,
				it: true,
			},
			sourceType: 'module'
		},
		rules: {
			'no-unused-expressions': ['off']
		},
	}
]
