const express = require("express");
const app = express();

// app.get("/user", (req, res) => {
//   res.send({ firstName: "Aditya", lastname: "Sharma" });
// });

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
