const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM To Do ORDER BY name, completed DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// POST
const creature = req.body;
    const sqlText = `INSERT INTO To Do (name, completed)
                     VALUES ($1, $2)`;
    pool.query(sqlText, [toDo.name, toDo.completed])
        .then((result) => {
            console.log(`Added To Do to the database`, ToDo);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
// PUT
router.put('/toggle/:id', (req, res) => {
    let { id } = req.params;
    // This query will switch from true to false and false to true
    const sqlText = `
        UPDATE "To Do" SET "completed" = NOT "completed" 
        WHERE "id" = $1;
    `;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
});
// DELETE
router.delete('/:id', (req, res) => {
    let { id } = req.params;
    const sqlText = `DELETE FROM "To Do" WHERE "id" = $1;`;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
});

module.exports = router;
