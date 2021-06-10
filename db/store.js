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
        
        console.log("test route")
        const notes = await fs.readFileSync(__dirname + "/db.json")
        console.log(JSON.parse(notes))
        return JSON.parse(notes)
            
        
    },
    writeNotes: function(body) {
        
        console.log("test route")
        const notes = fs.readFileSync(__dirname + "/db.json");
        // notes.push(body)
        console.log(notes)
        return JSON.parse(notes)
        
            
        
    }
}

module.exports = store;