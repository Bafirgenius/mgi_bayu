//Import dependencies
const router = require("express").Router();

//Import Controller
const userController = require("../controllers/users");

router.post("/user", userController.add);
router.put("/:userId/user", userController.update)
router.delete("/:userIdId/user", userController.delete)
router.get("/user", userController.browse)

module.exports = router;