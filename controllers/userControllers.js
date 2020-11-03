let games = require('../models/game');

module.exports = {
    getAllGames: (req, res) => {
        return res
        .status(200)
        .json({confirmation: 'success', games})
    },
    getSingleGame: (req, res) => {
        let foundGame = games.filter((game) => {
            if (game.id === req.params.id) {
                return res.json({confirmation: 'success', game})
            }
        })
        if (!foundGame.length) {
            return res
            .status(400)
            .json({confirmation: 'fail', message: 'Game does not exist!'})
        }
    },
    createGame: (req, res) => {
        if (!req.body.name || !req.body.description || !req.body.yearReleased || !req.body.playTime) {
            return res
            .status(400)
            .json({confirmation: 'fail', message: 'All inputs must be filled in'});
        }
        let existingGame = games.filter((game) => game.name === req.body.email);
        if (existingGame.length) {
            return res
            .status(400)
            .send('This game already exists.')
        }
    
        let newGame = {};
    
        newGame.name = req.body.name;
        newGame.description = req.body.description;
        newGame.yearReleased = req.body.yearReleased;
        newGame.playTime = req.body.playTime;
        newGame.id = String(games.length + 1);
        games.push(newGame);
    
        return res.status(200).json({confirmation: 'Success', newGame});
    },
    updateGame: (req, res) => {
        let updateGame = req.body;
        games.filter((foundGame) => {
            if (foundGame.id === req.params.id) {
                foundGame.name = updateGame.name
                ? updateGame.name
                : foundGame.name
    
                foundGame.description = updateGame.description
                ? updateGame.description
                : foundGame.description
    
                foundGame.yearReleased = updateGame.yearReleased
                ? updateGame.yearReleased
                : foundGame.yearReleased
    
                foundGame.playTime = updateGame.playTime
                ? updateGame.playTime
                : foundGame.playTime
            }
        })
            return res
            .status(200)
            .json({message: "Game updated", games})
    },
    deleteGame: (req, res) => {
        let removedGame = games.filter((foundGame) => {
            return foundGame.id !== req.params.id;
        })
        games = removedGame;
        return res
        .status(200)
        .json({confirmation: "success", games})
    }
};