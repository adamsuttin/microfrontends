const fs = require('fs-extra')
const path = require('path')

const PUBLIC_DIR = path.resolve(__dirname, '../public')
const DIST_DIR = path.resolve(__dirname, '../dist')
const inputHTML = `${PUBLIC_DIR}/index.html`
const outputHTML = `${DIST_DIR}/index.html`

fs.copy(inputHTML, outputHTML, err => {
  if (err) return console.log(err)
  console.log(`Copied ${inputHTML} to ${outputHTML}.`)
})