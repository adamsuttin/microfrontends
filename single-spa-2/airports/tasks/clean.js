const fs = require('fs-extra')
const path = require('path')

const clean = async function (src, dest) {
  try {
    await fs.remove(path.resolve(__dirname, '../dist'))
    console.log('Removed "./dist" directory')
  } catch (err) {
    console.log(err)
  }
}

clean()