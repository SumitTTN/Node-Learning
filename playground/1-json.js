const fs = require('fs');

const readFile = fs.readFileSync('1-json.json')
const readFileJson = readFile.toString()
const parseFile= JSON.parse(readFileJson);
parseFile.name = 'uncle'
parseFile.age =19

const overWriteFile = JSON.stringify(parseFile)
fs.writeFileSync('1-json.json',overWriteFile)
