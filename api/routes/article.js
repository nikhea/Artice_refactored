const express = require('express');
router = express.Router();
Article = require('../models/articles');
  Comments = require("../models/comments")

router.get('/', (req, res) => {
	Article.find()
		.then((articles) => {
			res.status(200).json(articles);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/:Id', (req, res, next) => {
	const id = req.params.Id;
    Article.findById(id).populate('comments').exec()
		.then((foundArticule) => {
			res.json(foundArticule);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post('/', (req, res) => {
	const Articles = new Article({
		title: req.body.title,
		description: req.body.description,
		author: req.body.author
	});
	Articles.save()
		.then((article) => {
			res.status(200).json(article);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.put('/:Id', (req, res) => {
	const id = req.params.Id;
	Article.findByIdAndUpdate(id, req.body, { new: true })
		.then((article) => {
			res.status(200).json(article);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.delete('/:Id', (req, res) => {
	const id = req.params.Id;
	Article.findById(id)
		.then((article) => article.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});




// COMMENTS
router.get('/:Id/comments/new', (req, res) => {
       const id =  req.params.Id
    Article.findById(id)
    .then((comments) => {
        res.status(200).json(comments)
    })
    .catch((err) => {
        res.status(500).json(err)
    });
})

router.post('/:Id/comments', (req, res) => {
    const id = req.params.Id
    Article.findById(id)
    .then((articles) => {
        const Comments = new article({
            content: req.body.content,
            author: req.body.author
        });
        Comments.create(articles)
      .then((comments) => {
        articles.comments.push(comments)
          articles.save()
          res.status(200).json(comments)
    })
    .catch((err) => {
        res.status(500).json(err);
    });
    })
    .catch((err) => {
       res.status(500).json(err) 
    });
 


})


module.exports = router;
