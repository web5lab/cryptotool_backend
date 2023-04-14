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
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { path: imagePath } = req.file;
    const image = await sharp(imagePath)
      .resize(200, 200)
      .toBuffer();
    fs.writeFileSync(imagePath, image);
    res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

app.listen(3012, () => {
  console.log('Server started on port 3000');
});
