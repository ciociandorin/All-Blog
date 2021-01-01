const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Post } = require('../models/post.model.js'); 

router.get('/', async (req, res) => {
    await Post.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Posts :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', async (req, res) => {
    var post = new Post({
        title: req.body.title,
        description: req.body.description,
        post_by : req.body.post_by
    });
    await post.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    await Post.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Post :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var post = {
        title: req.body.title,
        description: req.body.description,
    };
    await Post.findByIdAndUpdate(req.params.id, { $set: post }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    await Post.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/comment/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    var comment = {
        comment: req.body.comment,
        post_by: req.body.post_by
    };

    var post = {
        comment 
    };

    console.log(comment);
    console.log(req.params);
    Post.findByIdAndUpdate(req.params.id, { $push: post }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/list/:username', async (req , res) => {
    var username = req.params.username;
    console.log(username);
    if (username == "admin"){
        await Post.find(function(err,docs){
            console.log(docs);
            res.json(docs);
          });       
    }
    else{
        await Post.find({
            "post_by": username
          }, function(err,docs){
            console.log(docs);
            res.json(docs);
          });
    }
  });

module.exports = router;