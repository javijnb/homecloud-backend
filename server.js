const express = require('express');
const bodyParser = require('body-parser');

// Lógica de rutas
const uploadRouter = require("./routes/upload");
const downloadRouter = require("./routes/download");
const dirRouter = require("./routes/dir");
const contentRouter = require("./routes/content");

// Inicialización
const app = express();
const port = 9000;

// Parsers
var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());

// Rutas
app.get("/", (req, res)=> {res.send("Nuño Drive")});
// app.use("/upload", uploadRouter);
app.use("/download", downloadRouter);
app.use("/dir", dirRouter);
app.use("/content", contentRouter);


// Start server
app.listen(port, ()=>{
    console.log("Server started on port "+port);
});