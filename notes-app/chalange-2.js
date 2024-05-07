const fs = require("fs");

const getNotes = () => {
  return "get notes";
};

const addNote  =(title, body) =>{
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
        console.log(':: new note add');
    } else {
        console.log(':: note title added');
    }
}

const removeNotes = (title) => {
  const notes = loadNotes();
  const filterData = notes.filter((note) => note.title != title);
  if (notes.length > filterData.length) {
    saveNotes(filterData);
    console.log(":: data removes");
  } else {
    console.log(":: data not removed");
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const readFile = fs.readFileSync("notes.json");
    const file = readFile.toString();
    return JSON.parse(file);
  } catch (error) {
    return [];
  }
};

module.exports = { getNotes,addNote, removeNotes };
