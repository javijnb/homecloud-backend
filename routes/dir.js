// const express = require("express");
// const router = express.Router();
// const fs = require('fs');
// const path = require("path");
// const pathTranslator = require("../utils/path-translator");

// // To create a new directory:
// router.post('/:path?', async (req, res, next)=>{

//     const dirPath = pathTranslator(req.params.path);
//     //const name  = "carpeta-de-prueba";
//     const name = req.body.name;
//     console.log("Respuesta recibida: ", name);

//     if(!name){
//         return res.status(400).json({
//             success: false,
//             message: "No name was specified for the new directory"
//         });
//     }

//     try{
//         await fs.promises.mkdir(path.join(dirPath, name));
//         //fs.mkdir(path.join(dirPath, name));
//     } catch(err){
//         return next(err)
//     }

//     const statusMessage = 'Directory ' +name+ ' was successfully created in path '+dirPath;
//     console.log("A new directory has been created: "+statusMessage);

//     res.json({
//         success: true,
//         message: statusMessage
//     });

// });

// module.exports = router;

const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const processPath = require('../utils/path-translator');

router.post('/:path?', async (req, res, next) => {

  const name = req.body.name;
  const dirPath = processPath(req.params.path);

  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'No name was specified',
    });
  }

   try {
     await fs.promises.mkdir(path.join(dirPath, name));
   } catch (e) {
     return next(e);
   }

   res.json({ success: true, message: 'Directory created' });
   console.log("<DIR>: New folder name: ",dirPath +"/"+ name);

});

module.exports = router;