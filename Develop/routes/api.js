// const router = require('express').Router();
const Workout = require("../models/workout.js");
const mongojs = require("mongojs")

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        //MongoDB to show specific workout
        console.log(req.body);
        Workout.findOneAndUpdate({
            _id: mongojs.ObjectId(req.params.id)
        },
            {
                $push: {
                    exercises:
                    {
                        type: req.body.type || null,
                        name: req.body.name || null,
                        duration: req.body.duration || null,
                        weight: req.body.weight || null,
                        sets: req.body.sets || null,
                        reps: req.body.reps || null,
                        distance: req.body.distance || null,
                    }
                }
            })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });


    app.post("/api/workouts", function (req, res) {
        Workout.find()
            .then(dbWorkout => {
                res.json(dbWorkout);
            });
    });

    app.get("/api/workouts/range", function (req, res) {
        Workout.find()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
}


// router.get("/api/workouts/range", (req, res) => {
//     db.Workout.find({})
//         .then(workouts => {
//             console.log(workouts);
//             res.json(workouts);
//         });
// });


// router.post("/api/workouts/:id", ({ body }, res) => {
//     db.Excercise.create(body)
//         .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.post("api/workouts", (req, res) => {
//     Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err)
//         });
// });


