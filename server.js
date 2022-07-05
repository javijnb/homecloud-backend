const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

// Lógica de rutas
const uploadRouter = require("./routes/upload");
const downloadRouter = require("./routes/download");
const dirRouter = require("./routes/dir");
const contentRouter = require("./routes/content");
const authenticatorRouter = require("./routes/authenticator");

// Inicialización
const app = express();
app.use(cors())
app.use(express.json());
const corsOptions = {
    origin: "*",
    }


// Rutas
app.get("/", cors(), (req, res)=> {res.send("Nuño Drive")});
app.use("/upload", cors(), uploadRouter);
app.use("/download", cors(), downloadRouter);
app.use("/dir", cors(), dirRouter);
app.use("/content", cors(), contentRouter);
app.use("/authenticate", cors(corsOptions), authenticatorRouter);

// Start server
app.listen(process.env.PORT, ()=>{
    console.log("Server started on port "+process.env.PORT);
});