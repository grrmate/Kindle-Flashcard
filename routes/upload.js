
const router = require("express").Router();
const knex = require('knex');

router.post('/upload', async (req,res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const db = knex({
      client: 'sqlite3',
      connection: {
        filename: req.files.vocabulary.tempFilePath
      }
    });

    const result = Object.fromEntries(await Promise.all(['BOOK_INFO', 'DICT_INFO', 'LOOKUPS', 'METADATA', 'VERSION', 'WORDS'].map(async (table) => [table, await db.select().table(table)])))
    res.send(result);
})
module.exports = router;
