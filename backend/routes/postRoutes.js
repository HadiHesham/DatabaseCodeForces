const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get("/api/items", postController.getPosts);
router.post("/api/items", postController.createPost);
router.delete("/api/items", postController.deletePost);
router.put("/api/items/:id", postController.updatePost);

module.exports = router;
