const express = require('express');
const router = express.Router();
const movies = require('../models/Movies');

// GET Movie by ID
router.get('/questions/:id', async (req, res) => {
    const data = await movies.findById(req.params.id);
    res.send(data);

})

// Get all posts
router.get('/', async (req,res) => {
    try {
        const posts = await movies.find();
        res.status(200).json(posts);
    }
    catch (err) {
        res.json({message:err});
    }

})



module.exports = router;