const router = require("express").Router();
const Workout = require("../../models/Workout");

// Get the last workout here
// This makes use of the Model.aggregate() function because we have to add properties to the document
// We first use $match with an empty object to just grab all the documents
// Then we sort all the data so that the latest ID is placed up the top
// Then we use $limit to only return one result
// Finally, we use $addFields to add a new property to the document, and use the $sum to get back the total duration (remember, exercises is an array of objects, so we have to access duration by using dot notation)
router.get("/", async (req, res) => {
    try {
        const lastWorkout = await Workout.aggregate([
            {
                $match: {}
            },
            {
                $sort: { _id: -1 }
            },
            {
                $limit: 1
            },
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ])
        res.json(lastWorkout);
    } catch (err) {
        res.json(err);
    }
});

// Get workouts by range 
// Double check if this breaks with the exercise put route...
router.get("/range", async (req, res) => {
    try {
        const lastWorkout = await Workout.aggregate([
            {
                $match: {}
            },
            {
                $sort: { _id: -1 }
            },
            {
                $limit: 7
            },
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ])
        res.json(lastWorkout);
    } catch (err) {
        res.json(err);
    }
});

// Add a new workout here
router.post("/", (req, res) => {
    Workout.create(req.body)
    .then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// Add an exercise to a workout (by ID) here???
router.put("/:id", (req, res) => {
    Workout.updateOne(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    )
    .then(newExercise => {
        res.json(newExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;