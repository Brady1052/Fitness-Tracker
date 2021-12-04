// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const workoutSchema = new Schema({
//     day: {
//         type: Date,
//         default: () => new Date(),
//     },
//     exercise: [{
//         type: {
//             type: String,
//             trim: true,
//             require: true,
//         },
//         name: {
//             type: String,
//             trim: true,
//             require: true,
//         },
//         duration: {
//             type: Number,
//             require: true,
//         },
//         weight: {
//             type: Number,
//         },
//         reps: {
//             type: Number,
//         },
//         sets: {
//             type: Number,
//         },
//         distance: {
//             type: Number,
//         }
//     }
// ],
// },  { toJSON: { virtuals: true }} );

// workoutSchema.virtual('totalDuration').get(function(){
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// });

// const Workout = mongoose.model("workout", workoutSchema);

// module.exports = Workout;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const opts = { toJSON: { virtuals: true }};
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        duration: {
          type: Number,
          required: true,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  }, { toJSON: { virtuals: true }} );

workoutSchema.virtual('totalDuration').get(function(){
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;