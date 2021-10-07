const router = require("express").Router();

const { signupController } = require("../controller");
const { signupValidation } = require("../middleware/validation");

router.get("/", (req, res) => {
  res.json({ msg: "hi from public" });
});
router.post("/signup", signupValidation, signupController);

module.exports = router;
