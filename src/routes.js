module.exports = app => {
    const questions = require('./controller.js');

    var router = require("express").Router();

    router.get("/random/:amount", questions.getRandomAmount);
    router.get("/random", questions.getRandom);

    router.get("/:id", questions.getByID);

    app.use('/api/questions', router);
}