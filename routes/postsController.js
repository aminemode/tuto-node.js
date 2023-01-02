const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log('get error ' + err);
    })
})

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('post error' + err)
    })
})

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('id inconue : ' + req.params.id)
    
    const updateRecord = {
        author: req.body.author,
        message: req.body.message
    }

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if(!err) res.send(docs)
            else console.log('update error ' + err)
        }
    )
})

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('id inconue : ' + req.params.id)

    PostsModel.findByIdAndDelete(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log('delete error : ' + err)
        }
    )
})

module.exports = router