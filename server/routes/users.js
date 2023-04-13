import express from "express";
import { login, signup } from "../controllers/auth.js";
import { getAllUsers, updateProfile } from "../controllers/users.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

export default router;

// why post heree because  i want to take a data from the frontend
//using the post you go to url then copy the whole content of the body
// get is for read -----------------read karna hai
// post is for to take a body part and use it or write it
