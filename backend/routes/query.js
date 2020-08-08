const express = require("express");
const router = express.Router();

const {
    isAuth,
    isTeacher,
    isEmployee,
    requireSignin
} = require("../controllers/auth");

const { userById } = require("../controllers/user");

const { createQuery, querylist, queryById, respondQuery, read
} = require("../controllers/query");

router.post("/query/create/:userId",requireSignin,isAuth,isTeacher,createQuery);
router.get("/query/list/:userId",requireSignin,isAuth,isEmployee,querylist);
router.get("/query/:queryId",read)
router.post("/query/respond/:userId/:queryId",requireSignin,isEmployee,respondQuery);

router.param("userId", userById);
router.param("queryId", queryById);

module.exports = router;
