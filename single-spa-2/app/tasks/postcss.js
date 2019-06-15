const path = require('path');
const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")


const SRC_DIR = path.resolve(__dirname, '../src')
const DIST_DIR = path.resolve(__dirname, '../dist')
const inputStylesheet = `${SRC_DIR}/css/styles.css`
const outputStylesheet = `${DIST_DIR}/styles.css`


const css = fs.readFileSync(inputStylesheet, "utf8", err => {
  if (err) return console.log(err)
  console.log(`Read ${inputStylesheet}`)
})

postcss()
  .use(atImport())
  .process(css, {
    // `from` option is needed here
    from: inputStylesheet
  })
  .then(result => {
    fs.writeFile(outputStylesheet, result.css, err => {
      if (err) return console.log(err)
      console.log(`Wrote ${inputStylesheet} to ${outputStylesheet}`)
    })
  })