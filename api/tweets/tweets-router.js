const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("get all tweets");
});
router.get("/:id", (req, res) => {
  res.json("get tweet by id");
});
router.post("/", (req, res) => {
  res.json("create tweet");
});
router.put("/:id", (req, res) => {
  res.json("update tweet");
});
router.delete("/", (req, res) => {
  res.json("delete tweet");
});
module.exports = router;
