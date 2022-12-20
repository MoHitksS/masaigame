const { Router } = require('express');
const randomWords = require('random-words');
const { UserModel } = require('../Models/playzone.model');
const Playzone = Router();

Playzone.get('/word', (req, res) => {
    let word = randomWords().toUpperCase()
    res.send(word);
})

Playzone.post('/add', async (req, res) => {
    const data = UserModel(req.body);
    await data.save();
})

Playzone.get('/get', async (req, res) => {
    const data = await UserModel.find().sort({ score: -1 });
    res.send(data)
})



module.exports = {
    Playzone
}