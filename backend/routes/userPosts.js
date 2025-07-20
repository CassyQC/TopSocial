const express = require('express');
const {getUserPost, getUserPostById,addUserPost,deleteUserPostById,updateUserPost} = require('../controllers/userPostsController');

const userPostsRouter = express.Router();

//Get get all user posts /api/userPosts
userPostsRouter.get('/', getUserPost)

//Get get a user post by id /api/userPosts/:post_id
userPostsRouter.get('/:post_id',getUserPostById)

//POST post(add)a user /api/userPosts
userPostsRouter.post('/',addUserPost)


//DELETE delete a user /api/userPosts
userPostsRouter.delete('/:post_id',deleteUserPostById)

//Put update a user /api/userPosts
userPostsRouter.put('/:post_id',updateUserPost)
module.exports = userPostsRouter;