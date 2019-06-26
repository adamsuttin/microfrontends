/* Because we are compiling a linked npm module
  (@mf/shared-components)
  we need to use `babel.config.js` as opposed to `.babelrc` */

module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from'
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
}