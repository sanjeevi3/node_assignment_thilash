const express = require("express");
const routes = require(".");
const controller =require("../controller/post");
const validation = require("../validation/post")
const router = express.Router();

router.post("/",validation.addPost,controller.add);
router.delete("/:id",validation.PostId,controller.delete);
router.put("/",validation.updatePost,controller.update);
router.get("/",controller.get);
router.get("/:id",validation.PostId,controller.get);
module.exports = router;