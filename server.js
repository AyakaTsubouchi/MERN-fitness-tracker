const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

let Exercise = require("../models/exercise.model");
app.get('/exercises', (req, res) => {
  Exercise.find()
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(400).json("Error: " + err));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected!");
    app.listen(port);
    console.log(`Server is running on port: ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
