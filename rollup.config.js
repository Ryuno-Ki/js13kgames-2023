import css from 'rollup-plugin-css-only';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import importAssertions from 'rollup-plugin-import-assertions';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import license from 'rollup-plugin-license';

const LICENSE_HEADER = `My entry to js13kgames 2023 - 13th Century.
Copyright (C) 2023	André Jaenisch

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`;

const plugins = process.env.NODE_ENV === 'development'
	? [
		importAssertions(),
		json({ namedExports: false }),
		css({ output: 'main.css' }),
		htmlTemplate({ template: './src/single.html', target: './public/index.html' }),
	] : [
		importAssertions(),
		json({ namedExports: false }),
		css({ output: 'main.css' }),
		htmlTemplate({ template: './src/single.html', target: './public/index.html' }),
		terser(),
		license({ banner: LICENSE_HEADER }),
	];

const client = {
	input: './src/js/app.js',
	output: {
		file: './public/client.js',
		format: 'iife',
		name: 'myname',
	},
	plugins,
};

export default [ client ];
