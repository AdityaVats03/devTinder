const express = require("express");
const app = express();

app.get(
  "/user",
  (req, res, next) => {
    next();
    res.send("1st Response");
    // next()
  },
  [
    // can write this syntax too
    (req, res, next) => {
      // res.send("2nd Resonse");
      next();
    },
    (req, res, next) => {
      next();
    },
    (req, res, next) => {
      next();
    },
  ],
  (req, res) => {
    // res.send("5th Resonse");
    next();
  }
);

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Aditya", lastname: "Sharma" });
});

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Aditya", lastname: "Sharma" });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Data successfully saved to database");
});

app.use("/test", (req, res) => {
  res.send("Hello from test Server");
});

app.use((req, res) => {
  res.send("Hello from Server");
});

app.listen(3000, () => {
  console.log("Server is successfuly listening on port 3000 with nodemon...");
});
