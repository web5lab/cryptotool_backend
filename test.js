const express = require('express');
const sharp = require('sharp');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Allow any type of file
    cb(null, true);
  }
});

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

app.post('/upload', upload.single('file'), async (req, res) => {
  console.log(req.file);
  try {
    const { path: filePath, originalname: fileName } = req.file;

    // Check if the file is an image
    const extension = path.extname(filePath).toLowerCase();
    const isImage = imageExtensions.includes(extension);

    let buffer = null;
    if (isImage) {
      buffer = await sharp(filePath)
        .resize(200, 200)
        .toBuffer();
    } else {
      buffer = fs.readFileSync(filePath);
    }

    fs.writeFileSync(filePath, buffer);
    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

app.get('/download/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, 'media', fileName);

  try {
    if (fs.existsSync(filePath)) {
      res.download(filePath, fileName);
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

app.listen(3012, () => {
  console.log('Server started on port 3012');
});
