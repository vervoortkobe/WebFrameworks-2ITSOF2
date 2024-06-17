const mongoose = require('mongoose');
const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/studenten');
}

const student = new mongoose.Schema({
    voornaam: {
        type: String,
        required: true,
        unique: true
    },
    lievelingseten: [{type: String}],
    info: {
        school: {
            type: String
        },
        schoenmaat: {
            type: Number
        }
    }
});

const Student = mongoose.model("student", student);

connect()
    .then(async connection => {
        const student = await Student.create({
            voornaam: "Kristof",
            lievelingseten: ["stoofvlees", "hutsepot"],
            info: {
                school: "AP",
                schoenmaat: 42
            }
        })
        console.log(student);
    })
    .catch(e => console.error(e))
