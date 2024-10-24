import express from "express"
import { login, logout, register, updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();
router.route("/register").post(singleUpload,register);
router.route("/logout").get(logout)
router.route("/login").post(login);

router.route("/profile/update").post(isAuthenticated,updateProfile);
// router.route("/register").post(log);

export default router