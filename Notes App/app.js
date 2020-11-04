const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    decription: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Adding a new note!',argv)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    description: 'remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

// read
yargs.command({
    command: 'read',
    description: 'read a note',
    handler: function(){
        console.log('Reading the note')
    }
})

//list
yargs.command({
    command: 'list',
    decsription: 'list all notes',
    handler: function(){
        console.log('Listing all notes')
    }
})

//parses the arguemnts 
yargs.parse()
