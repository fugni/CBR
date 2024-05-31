const sql = require("./db.js");

const Question = function(question) {
    this.question = question.question;
    this.option1 = question.option1;
    this.option2 = question.option2;
    this.option3 = question.option3;
    this.feedback = question.feedback;
    this.category = question.category;
    this.type = question.type;
    this.image = question.image;
};

Question.getById = (questionId, result) => {
    sql.query(`SELECT * FROM questions WHERE id = ${questionId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
}

Question.getRandom = (result) => {
    sql.query(`SELECT * FROM questions ORDER BY RAND() LIMIT 1`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, res[0]);
    });
}

Question.getRandomAmount = (amount, result) => {
    sql.query(`SELECT * FROM questions ORDER BY RAND() LIMIT ${amount}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, res);
    });
}

module.exports = Question;