const fs = require('fs')
const path = require('path')
const program = require('commander')
const glob = require('glob')

const packageJSON = require('../package.json')
const convert = require('../lib/convert')

program
 .version(packageJSON.version)
 .option('-g --glob []', 'Files to convert')
 .option('-d --directory []', 'Output directory')
 .parse(process.argv)

if (!program.glob) {
  console.error('Expected input')
  process.exit(1)
}

const files = glob.sync(program.glob)
files.forEach(file => {
  const spec = JSON.parse(fs.readFileSync(file))
  const output = JSON.stringify(convert(spec), null, 2)
  if (program.directory) {
    const outputName = path.basename(file)
    const outputPath = path.resolve(program.directory, outputName)
    fs.writeFileSync(outputPath, output + '\n')
  } else {
    console.log(output)
  }
})
