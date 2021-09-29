const router = require('express').Router()
const books = require('./data')

let booksDirectory = books

router.get('/books', function (req, res) {
	res.send(booksDirectory)
})

router.get('/books/:id', function (req, res) {
	// add code
})

router.post('/books', function (req, res) {
	const {
		title,
		isbn,
		pageCount,
		publishedDate,
		thumbnailUrl,
		shortDescription,
		longDescription,
		status,
		authors,
		categories,
	} = req.body
})

router.delete('/books/:id', function (req, res) {
	// add code
})

module.exports = router
