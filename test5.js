const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Endpoint to get the list of files
app.get('/files', (req, res) => {
    console.log("ok")
  const directoryPath = '../airdot/airdot_backend'; // Replace with the actual path to your directory

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    res.json(files);
  });
});

// Endpoint to fetch a specific file
app.get('/file/:fileName', (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join('../airdot/airdot_backend', fileName); // Replace with the actual path to your directory

  fs.readFile(filePath, 'utf8', (err, fileContent) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    res.send(fileContent);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
