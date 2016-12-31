'use strict'
const router = require('express').Router()
const db = require('../../db')

router.get('/', (req, res) => {
	res.send({hello: 'you are at the student page'});
})

module.exports = router;