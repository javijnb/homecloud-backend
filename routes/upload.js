const router = require('express').Router();
const fileUpload = require('express-fileupload');
const processPath = require('../utils/path-translator');
const moveFile = require('../utils/move');

router.use(fileUpload());

router.post('/:path?', async (req, res, next) => {

    if (!req.files) {
        return res.status(400).json({
        success: false,
        message: 'No files were uploaded',
        });
    }

    const targetPath = processPath(req.params.path);
    let files = req.files.file;

    if (!Array.isArray(files)) {
        files = [files];
    }

    try {

        for(const file of files){
            await moveFile(file, targetPath);
            console.log("<UPLOAD>: Uploaded new file: ", targetPath+"/"+file.name);
        }

    } catch (err) {
        if(err.code) {
            return next(err);
        }

        return res.status(400).json({
            success: false,
            message: err.message,
            path: targetPath
        });
    }

    res.json({
        success: true,
        message: 'Files successfully uploaded',
        path: targetPath
    });

    

});

module.exports = router;