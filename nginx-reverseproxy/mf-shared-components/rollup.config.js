import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json'

const NAME = 'mf-shared-components'

const globals = {
	react: 'React',
	'react-dom': 'ReactDOM',
	'react-router-dom': 'ReactRouterDOM'
}

const plugins = [
	babel({
		exclude: 'node_modules/**'
	}),
	resolve(),
	commonjs(),
	terser(),
	postcss({
		extract: `./dist/styles.css`,
		minimize: {
    	preset: [
      	'default',
      	{
					discardComments: { removeAll: true }
				}
    	]
		},
		sourceMap: true
  })
]

export default {
	external: [
		'react',
    'react-dom',
    'react-router-dom'
	],
	input: 'src/index.js',
	output: [
		// {
		// 	exports: 'named',
		// 	file: pkg.browser,
		// 	format: 'umd',
    //   globals,
    //   name: NAME,
		// 	sourcemap: true,
		// 	sourcemapFile: `${pkg.browser}.map`
		// },
		// {
		// 	globals,
		// 	file: pkg.main,
		// 	format: 'cjs',
		// 	sourcemap: true,
		// 	sourcemapFile: `${pkg.main}.map`
		// },
		{
			globals,
			file: pkg.module,
			format: 'es',
			sourcemap: true,
			sourcemapFile: `${pkg.module}.map`
		}
	],
	plugins
}