// // const fs =  require('fs');
// const read = require('./chalange-2')

// fs.writeFileSync('new.txt','sumit is fe developer and try hard to learn node.js')
// fs.appendFileSync('new.txt',' append hi')

// // challage 2
// const readFile= read()
// console.log(":: readfile",readFile)

const yargs = require('yargs');
const notes = require('./chalange-2')

yargs.version('1.1.0')

yargs.command({
    command: 'list',
    describe: 'list a new description',
    builder: {
        title: {
            describe: 'Note Title'
        }
    },
    handler(){
        console.log(":: list note")
    }
})

yargs.command({
    command:'add',
    describe: 'add a new description',
    builder:{
        title:{
            describe:"note title",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
        console.log(":: add note",argv)
    }
})

yargs.command({
    command:'remove',
    describe: 'remove a new description',
    builder:{
        title:{
            describe:"note title",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
        console.log(":: add note",argv)
    }
})

yargs.parse()