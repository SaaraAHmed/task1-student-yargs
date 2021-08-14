const fs = require('fs')


const addNotes =function  (id, name,grade,comment)  {
    const notes = loadNotes();
    const duplicate = notes.filter(function (notes) {     
      return notes.id === id ;
    });
    console.log(duplicate);
  
    if (duplicate.length === 0) {
        notes.push(
        {
         id:id,
         name:name,
         grade:grade,
         comment:comment,
        }
      );
      saveNotes(notes);
      console.log("notes saved ");
    } else {
      console.log("Error ");
    }
  };



const loadNotes = function ()  {
    try {
      const dataBuffer = fs.readFileSync("notes.json").toString();
      return JSON.parse(dataBuffer);
    } catch (e) {
      return [];
    }
  };
  const saveNotes = function (notes)  {
    const savedata = JSON.stringify(notes);
    fs.writeFileSync("notes.json", savedata);
  };

const remove = function (id) {
    const notes = loadNotes()
    const notesToKeep = notes.filter ( function (notes) {
        return notes.id !== id
    })
    console.log(notesToKeep)
    saveNotes(notesToKeep)
   
}

module.exports = {
    remove:remove,
    addNotes :addNotes
  };
  