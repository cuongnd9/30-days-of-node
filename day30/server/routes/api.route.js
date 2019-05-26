const express = require("express");
const controller = require("../controllers/api.controller");

const router = express.Router();

router.get("/item/:code", controller.index);
router.post("/item", controller.post);

module.exports = router;
