const router = require("express").Router();
const { Workout } = require("../../models");

// Get the last workout here
// We first sort all the data so that the latest ID is placed up the top
// Then use .limit() to only return one result
router.get("/", (req, res) => {
    Workout.find({})
        .sort({ _id: -1})
        .limit(1)
        .then(lastWorkout => {
            res.json(lastWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// Get workouts by range 
// Double check if this breaks with the exercise put route...
router.get("/range", (req, res) => {
    
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

});

module.exports = router;