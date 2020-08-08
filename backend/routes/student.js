const express = require("express");
const router = express.Router();

const {isTeacher, requireSignin, isAuth} = require("../controllers/auth");
const {userById} =  require("../controllers/user")

const {createStudent, viewStudent, studentById} =  require("../controllers/student")
router.post("/student/create/:userId",requireSignin, isAuth, isTeacher, createStudent);
router.get("/student/view_student/:userId/:studentId",requireSignin, isAuth, viewStudent);

router.param('studentId', studentById);
router.param("userId", userById);

module.exports = router;