const express = require("express");
const router = express.Router();

const {
    create,
    trainingcontentById,
    read,
    remove,
    update,
    list,
} = require("../controllers/trainingcontent");
const { requireSignin, isAuth, isEmployee } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/trainingcontent/:trainingcontentId", read);
router.post("/trainingcontent/create/:userId", requireSignin, isAuth, isEmployee, create);
router.delete(
    "/trainingcontent/:trainingcontentId/:userId",
    requireSignin,
    isAuth,
    isEmployee,
    remove
);
router.put(
    "/trainingcontent/:trainingcontentId/:userId",
    requireSignin,
    isAuth,
    isEmployee,
    update
);

router.get("/trainingcontents", list);

router.param("userId", userById);
router.param("trainingcontentId", trainingcontentById);

module.exports = router;