const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
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
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;