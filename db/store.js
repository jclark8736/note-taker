const fs = require("fs");
const util = require("util");
const path = require("path");


// look up uuid (util.promisify) 


// const getNotes = util.promisify(fs.readFile);

// const saveNotes = util.promisify(fs.writeFile);

// pull data from db.json
// app.get("/api/notes", function(req, res){
//     fs.readFile(__dirname + "db.json", "utf8", function(error, data){
//         if (error) {
//             return console.log(error)
//         }
//         console.log("TESTING NOTES", data)
//         res.json(JSON.parse(data))
//     });
// });


// getNotes() {
//     return read().then {
//         // parse notes to return them as parsed notes
//     }
// }

const store = {
    getNotes: async function() {
        
        
        let notes = await fs.readFileSync(__dirname + "/db.json")
        
        console.log(JSON.parse(notes))
        return JSON.parse(notes)
        
        
    },
    writeNotes: async function(note) {
        
        
        let notes = await JSON.parse(fs.readFileSync(__dirname + "/db.json"));
        //push new note to array of spread notes
        notes.push(note)
        //return/write array to db.json - under api routes
        console.log("TESTNOTES")
        console.log(notes)
        return notes

    
            
        
    },
    
    deleteNotes: async function() {}

    
}

module.exports = store;