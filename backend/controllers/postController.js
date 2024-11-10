const Post = require('../models/postModel');

exports.getPosts = async (req, res) => {
  try {
    const limit = req.query.limit;
    const search = req.query.search;
    let posts;
    if (search) {
      posts = await Post.find({
        content: { $regex: search, $options: "i" }, isDeleted: false
      }).sort({ createdAt: -1 }).limit(parseInt(limit, 10) || 10);
    } else {
      posts = await Post.find({ isDeleted: false }).sort({ createdAt: -1 }).limit(parseInt(limit, 10) || 10);
    }
    const count = await Post.countDocuments({ isDeleted: false });
    res.json([posts, count]);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Server error');
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = new Post({ content: req.body[0] });
    await newPost.save();
    const posts = await Post.find({isDeleted: false}).sort({ createdAt: -1 }).limit(req.query.limit);
    const count = await Post.countDocuments({isDeleted: false});
    res.json([posts,count]);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Server error');
  }
};

exports.deletePost = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id) {
      await Post.updateMany({}, { isDeleted: true });
    } else {
      await Post.findByIdAndUpdate(id, { isDeleted: true });
    }
    const updatedPosts = await Post.find({isDeleted: false}).sort({ createdAt: -1 });
    const count = await Post.countDocuments({isDeleted: false});
    res.json([updatedPosts,count]);
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).send('Server error');
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    await Post.findByIdAndUpdate(id, { content });
    const updatedPost = await Post.find({isDeleted: false}.sort({ updatedAt: -1}));
    if (!updatedPost) {
      return res.status(404).send('Post not found');
    }
    const count = await Post.countDocuments({isDeleted: false});
    res.json([updatedPost,count]);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).send('Server error');
  }
};