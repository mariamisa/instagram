const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hi from public" });
});

module.exports = router;
