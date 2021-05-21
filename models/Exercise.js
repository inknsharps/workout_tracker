const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Workout type is required."
    },
    name: {
        type: String,
        trim: true,
        required: "Workout name is required."
    },
    distance: {
        type: Number,
        min: 1
    },
    weight: {
        type: Number,
        min: 1
    },
    sets: {
        type: Number,
        min: 1
    },
    reps: {
        type: Number,
        min: 1
    },
    duration: {
        type: Number,
        min: 1
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;