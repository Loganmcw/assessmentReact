require('dotenv').config();
const express = require("express"),
    session = require("express-session"),
    bodyParser = require("body-parser"),
    massive = require("massive"),
    cors = require("cors"),
    lc = require(__dirname + '/controllers');

const app = express();

app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
});

app.get('/api/get/:id', lc.getAnimal)
app.put('/api/put', lc.putAnimal)
app.post('/api/post', lc.postAnimal)
app.delete('/api/delete/:id', lc.deleteAnimal)

const PORT = 3010;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
