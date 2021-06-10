const router = require('express').Router();
const store = require('../db/store');

// create a route that respondes with all notes coming from the database

router.get('/notes', (req, res) => {
    store.getNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})

//localhost:/3000/api/notes

router.post('/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
    const storedNotes = store.writeNotes(req.body)
    console.log(storedNotes)
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(er))

    // .then((notes) => {
    //     return res.json(notes)
    // })
    // .catch((err) => res.status(500).json(err))
})


//push req.body to db.json array - stringify



module.exports = router;