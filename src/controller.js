const Question = require("./model.js");

exports.getByID = (req, res) => {
    Question.getById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No question found with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Question with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.getRandom = (req, res) => {
    Question.getRandom((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving questions."
            });
        } else res.send(data);
    });
}

exports.getRandomAmount = (req, res) => {
    Question.getRandomAmount(req.params.amount, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving questions."
            });
        } else res.send(data);
    });
}