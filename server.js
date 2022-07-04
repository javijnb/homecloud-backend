const express = require('express');
const dotenv = require('dotenv')
dotenv.config();

// Lógica de rutas
const uploadRouter = require("./routes/upload");
const downloadRouter = require("./routes/download");
const dirRouter = require("./routes/dir");
const contentRouter = require("./routes/content");
const authenticatorRouter = require("./routes/authenticator");

// Inicialización
const app = express();

// Parsers
app.use(express.json());

// Rutas
app.get("/", (req, res)=> {res.send("Nuño Drive")});
app.use("/upload", uploadRouter);
app.use("/download", downloadRouter);
app.use("/dir", dirRouter);
app.use("/content", contentRouter);
app.use("/authenticate", authenticatorRouter);

// Start server
app.listen(process.env.PORT, ()=>{
    console.log("Server started on port "+process.env.PORT);
});