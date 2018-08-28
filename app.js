let express = require('express');
let app = express();

app.get("/", (req, res) => {
    res.send("Hello Band Teachers");
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
});