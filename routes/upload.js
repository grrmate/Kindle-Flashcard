
const router = require("express").Router();
const sqlite3 = require('sqlite3').verbose();

router.post('/upload', async (req,res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    var database = req.files.vocabulary;

    let db = new sqlite3.Database(database.tempFilePath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Connected to the Kindle database.');
        }
      });
    
    let vocabulary = () => {
        let query = `SELECT * FROM LOOKUPS`
        let result = []
        db.each(query, (err, row) => {
            result.push(row)
        }, () => {
            return result
        })
    }

    res.send(vocabulary())
})
module.exports = router;