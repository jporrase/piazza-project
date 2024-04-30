const express = require('express')
const router = express.Router()
const Posts = require('../models/Posts')
const verifyToken = require('../verifyToken')




//Post
router.post('/', verifyToken, async(req,res)=>{
    console.log(req.body)

    const postData = new Posts({
        title:req.body.title,
        topic:req.body.topic,
        messagebody:req.body.messagebody

    })

    try{
        const postToSave = await postData.save()
        res.send(postToSave)

    }catch(err){
        res.send({message:err})
    }
})

// Main get to get all of the posts
router.get('/', verifyToken,  async (req, res)=>{
    ///res.send('You are in movies (router)')
    try {
        const posts = await Posts.find()
        res.json(posts)
    } catch(err){
        res.json({message:err})
    }
})

// Get through post ID

router.get('/:piazzasId', verifyToken,  async(req,res)=>{
    try{
        const piazzasById = await Posts.findById(req.params.piazzasId)
        res.json(piazzasById)
    }catch(err){
        res.json({message:err})
    }
})

//An admin can delete all posts
router.delete('/', verifyToken,  async (req, res) => {
    try {
        const deleteAllPosts = await Posts.deleteMany({});
        res.send(deleteAllPosts);
    } catch (err) {
        res.send({ message: err });
    }
});

// DELETE by ID
router.delete('/:piazzasId', verifyToken, async(req,res)=>{
    try{
        const deletePostById = await Posts.deleteOne({_id:req.params.piazzasId})
        res.send(deletePostById)
    }catch(err){
        res.send({message:err})
    }
})

//Edit a specific post
router.patch('/:piazzasId', verifyToken, async(req,res) =>{
    try{
        const updatePostById = await Posts.updateOne(
            {_id:req.params.piazzasId},
            {$set:{
                title:req.body.title,
                topic:req.body.topic,
                messagebody:req.body.messagebody
                }
            })
        res.send(updatePostById)
    }catch(err){
        res.send({message:err})
    }
})




module.exports = router



/*

//Patch
router.patch('/:postId', async(req, res) => {
    try {
        const updatePostById = await User.findOneAndUpdate(
            { _id: req.params.postId },
            {
                $set: {
                    user_name: req.body.user_name,
                    user_city: req.body.user_city
                }
            },
            { new: true } // This option returns the updated document
        );
        res.send(updatePostById);
    } catch (err) {
        res.status(500).send({ message: err });
    }
});

//Delete
router.delete('/:postId',async(req,res)=>{
    try{
        const deletePostById = await User.deleteOne({_id:req.params.postId})
        res.send(deletePostById)
    }catch(err){
        res.send({message:err})
    }
})




router.get('/', async (req, res)=>{
    ///res.send('You are in movies (router)')
    try {
        const users = await User.find()
        res.json(users)
    } catch(err){
        res.json({message:err})
    }
})

router.get('/:usersId', async(req,res)=>{
    try{
        const usersById = await User.findById(req.params.usersId)
        res.json(usersById)
    }catch(err){
        res.json({message:err})
    }
})


// GET 2 (Read by ID)
router.get('/:postId', async(req,res) =>{
    try{
        const getPostById = await Users.findById(req.params.postId)
        res.send(getPostById)
    }catch(err){
        res.send({message:err})
    }
})
*/
