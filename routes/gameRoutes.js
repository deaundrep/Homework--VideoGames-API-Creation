const express = require('express');
const router = express.Router();
let games = require('../models/game');
const {getAllGames, getSingleGame, createGame, updateGame, deleteGame} = require('../controllers/userControllers');

router.get('/all-games', getAllGames);
router.get('/single-game/:id', getSingleGame);
router.post('/create-game', createGame);
router.put('/update-game/:id', updateGame);
router.delete('/delete-game/:id', deleteGame)








module.exports = router;