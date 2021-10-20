const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get('/:path?', async (req, res, next)=>{

    try{
        const requestedPath = req.params.path;
        const translatedPath = translatePath(requestedPath);
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
            path: requestedPath,
            content,
            success: true
        });
    }

    catch(err){
        next(err)
    }

});

function translatePath(requestedPath){
    return requestedPath.replace(/:/g, "/");
}

module.exports = router;