const express = require('express');
const multer = require('multer');
const path = require('path');
//const ejs=require('ejs')

const app = express();
//upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/'); // Specify the folder where you want to save the uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  console.log('stor',storage.destination)
  const upload = multer({ storage: storage });
//upload
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
//app.set('view engine','ejs')
// Always serve the main HTML file for any route
app.get('*', (req, res) => {
    //console.log(req.url)
    //console.log(__dirname)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded successfully!' });
  });


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});
