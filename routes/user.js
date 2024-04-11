import express from "express";
//import {User} from "../models/user.js"
import { register, login,logout, getMyProfile} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
    //,specialFunc, updateUser,deleteUser } from "../controllers/user.js";
const router = express.Router();
router.post("/new",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/me",isAuthenticated,getMyProfile)
//router.get("/userid/special",specialFunc)
//.put(updateUser).delete(deleteUser)
//above line is equivalent to following three lines
// router.get("/userid/:id",getuserDetails)
// router.put("/userid/:id",updateUser)
// router.delete("/userid/:id",deleteUser)
export default router;