const yargs = require('yargs');

yargs.version('1.1.0')

yargs.command({
    command: 'list',
    description: 'list a new description',
    handler: function(){
        console.log(":: list note")
    }
})

yargs.command({
    command:'add',
    description: 'add a new description',
    handler: function(){
        console.log(":: add note")
    }
})

yargs.command({
    command:'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        console.log("Title ::", argv.title)
        console.log("description ::",argv.body)
    }
})