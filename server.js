const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path")


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({ extended: false }));
app.use(cors());
// app.use(express.json());

// const uri = process.env.MONGODB_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// })

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use("/exercises",exercisesRouter);
app.use("/users",usersRouter);

app.get('/servertest', (req, res) => {
  res.json("hello~");
  console.log(`world`);
});



// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('client/build'));
  
//   app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'client','build','index.html'));
//   })
// }

// mongoose.set('useCreateIndex', true)
// mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true  })
//     .then(() => {
//         console.log('Connected!');
//         app.listen(port);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
