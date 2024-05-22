const mongoose = require("mongoose");
// const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   age: {
//     type: Number,
//     trim: true,
//     lowercase: true,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("age must be positive number");
//       }
//     },
//   },
//   email: {
//     type: String,
//     require: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is not valid");
//       }
//     },
//   },
//   password: {
//     type: String,
//     require: true,
//     minlength: 6,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("password not contain password string");
//       }
//     },
//   },
// });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     require: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const me = new User({
//   name: " sumit ",
//   password: "test@1268",
//   email: "sumit@gmail.com",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const task = new Task({ description: "new user", completed: false });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
