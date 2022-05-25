const db = require('../models')
const Post = db.posts

exports.findAll = (req, res) => {
    Post.find()
    .then((result) => {
        res.status(200).send({
            status: true,
            status_code: 200,
            data: result,
            message: "seluruh data berhasil ditampilkan"
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error while retrieving post."
        })
    });
}

exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false
    })
    
    post.save(post)
    .then((result) => {
        res.status(200).send({
            status: true,
            status_code: 200,
            data: result,
            message: "data baru berhasil ditambahkan"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while create post."
        })
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Post.findById(id)
    .then((result) => {
        res.status(200).send({
            status: true,
            status_code: 200,
            data: result,
            message: "data dengan id = "+ id +" berhasil ditampilkan"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while show post."
        })
    });
}

exports.update = (req, res) => {
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)
    .then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Post not found!"
            })
        }
        res.status(200).send({
            status: true,
            status_code: 200,
            data: result,
            message: "data dengan id = "+ id +" berhasil diupdated"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while update post."
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id
    console.log(id)

    Post.findByIdAndRemove(id)
    .then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Post not found!"
            })
        }
        res.status(200).send({
            status: true,
            status_code: 200,
            data: result,
            message: "Post with id = " +id+ " was deleted"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while delete post."
        })
    });
}
