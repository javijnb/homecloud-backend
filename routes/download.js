const router = require('express').Router();
const mime = require('mime-types');
const processPath = require('../utils/path-translator');

router.get('/:path?', async (req, res, next) => {

  const fileToDownload = req.body.name;
  const dirPath = processPath(req.params.path);

  if (!fileToDownload) {
    return res.status(400).json({
      success: false,
      message: 'No file-name was specified',
    });
  }

  const absolutePath = dirPath + "/" + fileToDownload;

   try {
     
    const mimetype = mime.lookup(absolutePath);
    res.setHeader('Content-Disposition', `attachment; filename=${absolutePath}`);
    res.setHeader('Content-Type', mimetype);
    res.download(absolutePath);

   } catch (e) {
     return next(e);
   }

   console.log("<DOWNLOAD>: Downloaded file: ",absolutePath);

});

module.exports = router;