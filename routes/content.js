const express = require("express");
const router = express.Router();
const fs = require('fs');
const pathTranslator = require("../utils/path-translator");

router.get('/:path?', async (req, res, next)=>{

    try{
        const translatedPath = pathTranslator(req.params.path);
        const dir = await fs.promises.opendir(translatedPath);
        const content = {files: [], directories: []};

        for await (const dirent of dir){
            if(dirent.isDirectory()){
                content.directories.push(dirent.name);
            }else{
                content.files.push(dirent.name);
            }
        }

        content.directories.sort();
        content.files.sort();

        res.json({
            path: translatedPath,
            content,
            success: true
        });

        console.log("<CONTENT>: Requested path: ", translatedPath);

    }

    catch(err){
        next(err)
    }

});


module.exports = router;