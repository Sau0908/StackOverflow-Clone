import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Question.js";
import answerRoutes from "./routes/Answers.js";
const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// get method is for read the url
// basically its read the "/"... "/about ".........
// and then callback function came which is for req and res
// and its important too knew that where it can e listen
app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API");
});

// why use?? here jab hamm directly callback function  function nahi provide kar rahe hote hai as above toh hamm use kaa use kar lete hai
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

// that is a config.env which is use for the security porpose
// either u can use this default value or create an another file with .env extenson
const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL;

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

//listen ------ for listening a particular URL
//process.env ---- for security purpose
