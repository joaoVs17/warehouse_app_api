const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());


app.get("/", (req, res) => res.json({msg: "Hello, Mommy"}));

app.listen(3000, () => console.log("Server ready on port 3000."));



module.exports = app;