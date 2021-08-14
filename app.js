const fs =require('fs')

const data = require('./notes')
const yargs = require("yargs");


yargs.command({
    command: "add",
    describe: "Add notes",
    builder: {

id: {
    describe: "This is id",
    demandOption: true,
    type: "number",
  },

  name: {
    describe: "This is name",
    demandOption: true,
    type: "string",
  },
  grade:
  {
    describe: "This is grade",
    demandOption: true,
    type: "number", 
  },
  comment:{
    describe: "This is comment",
    type:"string",
  }
},
handler: function (argv)  {
   notes.addNotes(argv.id,argv.name,argv.grade,argv.comment)
},
});


yargs.command({
    command: "read",
    describe: "Read notes",
    builder: {
      id: {
        describe: "This is id",
        demandOption: true,
        type: "number",
      }
    },
    handler: function (argv) {
      console.log(argv.id);
    },
  });


yargs.command({
    command:"delete",
    describe:"delete  notes",
    builder:{
        id: {
            describe: "This is id",
            demandOption: true,
            type: "number",
        }
    },
    handler: function (argv)  {
        notes.removeNotes(argv.id)
    },
});
//// list
yargs.command({
    command: "list",
    describe: "List notes",
    handler: function (argv)  {
      console.log(argv.id,argv.name,argv.grade,argv.comment)
    },
  });

// consolo.log (yargs.argv)

yargs.parse()

