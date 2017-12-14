const fs = require('fs')
const program = require('commander')
const glob = require('glob')

const packageJSON = require('../package.json')
const convert = require('../lib/convert')

program
 .version(packageJSON.version)
 .option('-g --glob []')
 .parse(process.argv)

if (!program.glob) {
  console.error('Expected input')
  process.exit(1)
}

const files = glob.sync(program.glob)
files.forEach(file => {
  const spec = JSON.parse(fs.readFileSync(file))
  console.log(JSON.stringify(convert(spec), null, 2))
})
