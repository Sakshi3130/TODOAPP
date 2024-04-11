import express from "express"
import { deleteTask,updateTask, getMyTask, newTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
//logged in user can only add task or to be able to see his / her tasks
router.post("/new",isAuthenticated,newTask)
router.get("/my",isAuthenticated,getMyTask)
export default router;
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask);