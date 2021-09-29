const router = require('express').Router()
const books = require('./data')

let booksDirectory = books

router.get('/reset', function (req, res) {
	booksDirectory = books
	res.send('ok')
})

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

router.put('/books/:id', function (req, res) {
	const { id } = req.params
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
