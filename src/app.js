const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user");
require("./config/database");
const app = express();
const { adminAuth, userAuth } = require("./middleWares/auth");

// app.use("/admin", adminAuth);

// app.get("/admin/getAllData", (req, res) => {
//   res.send("User Data sent");
// });

// app.get("/admin/deleteAllData", (req, res) => {
//   res.send(" Data Deleted Successfully");
// });

// app.get(
//   "/user",
//   userAuth,
//   (req, res, next) => {
//     next();
//     res.send("1st Response");
//     // next()
//   },
//   [
//     // can write this syntax too
//     (req, res, next) => {
//       // res.send("2nd Resonse");
//       next();
//     },
//     (req, res, next) => {
//       next();
//     },
//     (req, res, next) => {
//       next();
//     },
//   ],
//   (req, res) => {
//     // res.send("5th Resonse");
//     next();
//   }
// );

// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ firstName: "Aditya", lastname: "Sharma" });
// });

// app.get("/user/:userId", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Aditya", lastname: "Sharma" });
// });

// app.post("/user", (req, res) => {
//   console.log(req.body);
//   res.send("Data successfully saved to database");
// });

// app.use("/test", (req, res) => {
//   res.send("Hello from test Server");
// });
// app.use("/error", (req, res, next) => {
//   // Error Handling
//   try {
//     throw new Error("Error");
//   } catch (err) {
//     res.status(500).send("Something went wrong");
//   }
// });

// // app.use((req, res) => {
// //   res.send("Hello from Server");
// // });

// app.use("/errorHandling", (err, req, res, next) => {
//   // Error Handling
//   if (err) {
//     res.status(404).send("Something went wrong");
//   }
// });

app.use(express.json()); // adding middleware to read the json data incoming else can't read the json data

app.post("/signup", async (req, res) => {
  console.log(req.body);
  // Creating a new instance of User model
  // const user = new User({
  //   firstName: "Aditya",
  //   lastName: "Sharma",
  //   emailId: "adi@getMaxListeners.com",
  //   password: "aditya@123",
  // });

  const user = new User(req.body);
  try {
    await user.save();
    res.send("user added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
      console.log(
        "Server is successfuly listening on port 3000 with nodemon..."
      );
    });
  })
  .catch((err) => {
    console.log("Database cannot be established");
  });
