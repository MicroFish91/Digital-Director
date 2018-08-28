let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/uniforms'));

app.get("/", (req, res) => {
    res.send("Hello Band Teachers");
});


app.listen(3000, () => {
    console.log("Listening on port 3000")
}); 