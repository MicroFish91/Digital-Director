let express = require('express');
let app = express();
let db = require('./models');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/home'));

app.get("/", (req, res) => {
    res.send("Hello Band Teachers");
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
});