const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("get all users");
});

router.get("/:id", (req, res) => {
  res.json("get user by id");
});

router.post("/", (req, res) => {
  res.json("create users");
});
router.put("/:id", (req, res) => {
  res.json("update users");
});
router.delete("/", (req, res) => {
  res.json("delete users");
});
module.exports = router;
