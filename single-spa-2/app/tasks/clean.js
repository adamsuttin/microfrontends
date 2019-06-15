const fs = require('fs-extra')
const path = require('path')

const DIST_DIR = path.resolve(__dirname, '../dist')

fs.remove(DIST_DIR, err => {
  if (err) return console.log(err)
  console.log(`Removed ${DIST_DIR}`)
})