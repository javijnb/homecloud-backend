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