const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://MyNode:s1PA21toQUB642VM@mynode.9fyhueh.mongodb.net/devTinder"
  );
};

module.exports = {
  connectDB,
};
