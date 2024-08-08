const express = require("express");
const app = express();
let PORT = 4000
app.use(express.static("public"));
app.use(express.json({ limit: '1mb' }))


app.get("/", (req, res) => {
    console.log("testing console log")
    res.send("testing")

})

//http://localhost:4000/first?name=John&age=30

app.get("/first", (req, res) => {
    const name = req.query.name;  
    const age = req.query.age;    
    
    res.send(`Hello ${name}, you are ${age} years old!`);
})


app.listen(PORT, () => { console.log("Listening on 4000") })