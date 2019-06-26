import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

const NAME = 'airports'

const globals = {
	react: 'React',
	'react-dom': 'ReactDOM'
}

const external = [
	'react',
	'react-dom'
]

const plugins = [
	babel({
		exclude: 'node_modules/**'
	}),
	resolve(),
	commonjs(),
	// terser(),
	postcss({
		extract: `./dist/${NAME}.css`,
		minimize: {
    	preset: [
      	'default',
      	{
					discardComments: { removeAll: true }
				}
    	]
		},
		sourceMap: true
	}),
	copy({
    targets: [
    	{ src: 'public/**', dest: 'dist' }
    ]
  })
]

export default {
	external,
	input: 'src/index.js',		
	output: [
		/** For now, UMD only */
		{
			exports: 'named',
			file: pkg.browser,
			format: 'umd',
      globals,
			name: NAME,
			sourcemap: true,
			sourcemapFile: `${pkg.browser}.map`
		}
	],
	plugins
}