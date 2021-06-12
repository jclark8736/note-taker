const router = require('express').Router();
const store = require('../db/store');
const fs = require("fs");

// create a route that respondes with all notes coming from the database

router.get('/notes', (req, res) => {
    store.getNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})

//localhost:/3000/api/notes
//store.writenotes is function inside store.js that retreives db notes
//adds new note from user submission
//writefilesync 
router.post('/notes', async (req, res) => {
    console.log(req.body);
    res.json(req.body);
    const storedNotes = await store.writeNotes(req.body)
    
    
    fs.writeFileSync("./db/db.json", JSON.stringify(storedNotes))
    
    // .then((notes) => {
    //     return res.json(notes)
    // })
    // .catch((err) => res.status(500).json(err))
})

router.delete("/notes/:id", async (req, res) => {
    let deleteArray;
    console.log (req.params.id)
    
   //const returnedNotes = await JSON.parse(fs.readFileSync("./db/db.json"));
   const returnedNotes = await (fs.readFileSync("./db/db.json"));
    console.log("TEST RETURN NOTES" + returnedNotes)
    console.log(typeof(returnedNotes))
    const indexed = returnedNotes.map((item, index) => Object.assign(item, { index }))
    console.log("TEST INDEXED" + indexed)



    // i= 0;
    // deleteArray = returnedNotes.forEach((title, index) => title.id = i + 1);
    // console.log(deleteArray)
    // console.log(JSON.stringify(deleteArray))


//    for (i = 0; i < returnedNotes.length; i++) {
//        if (req.params.id == returnedNotes[i].id) {
//            deleteArray = returnedNotes.splice(i, 1);
//            console.log(deleteArray)
           
           
//        }
//    }
//    fs.writeFileSync("./db/db.json", JSON.stringify(deleteArray));

    
})

//push req.body to db.json array - stringify



module.exports = router;