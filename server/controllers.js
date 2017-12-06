const axios = require('axios');
var count = 3;

module.exports = {
    getAnimal: (req, res) => {
        console.log("Hitting Get", req.params.id)
        const db = req.app.get("db")
        const animal = req.params.id;

        db.get_animals(animal).then(resp => {
            res.status(200).send(resp)
        })
    }
    ,
    putAnimal: (req, res) => {
        console.log("Hitting Put", req.body)
        const db = req.app.get("db")
        const { animal, newName } = req.body;

        db.put_animals([animal, newName]).then(resp => {
            res.status(200).send()
        })
    }
    ,
    postAnimal: (req, res) => {
        console.log("Hitting Post", req.body)
        const db = req.app.get("db")
        const { animal } = req.body;

        db.post_animals([animal, count]).then(resp => {
            res.status(200).send()
        })
        count++
    }
    ,
    deleteAnimal: (req, res) => {
        console.log("Hitting Delete", req.params.id)
        const db = req.app.get("db")
        const animal = req.params.id;

        db.delete_animals(animal).then(resp => {
            res.status(200).send()
        })
    }
}