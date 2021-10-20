const express = require('express');
const app = express();
const port = 9000;

// Lógica de rutas
const uploadRouter = require("./routes/upload");
const downloadRouter = require("./routes/download");
const pathRouter = require("./routes/path");
const contentRouter = require("./routes/content");

// Routes
app.get("/", (req, res)=> {res.send("Nuño Drive")});
// app.use("/upload", uploadRouter);
// app.use("/download", downloadRouter);
// app.use("/path", pathRouter);
app.use("/content", contentRouter);

// Start server
app.listen(port, ()=>{
    console.log("Server started on port "+port);
});