'use strict'
const router = require('express').Router()
const db = require('../../db')
const Campus = db.model('campus');
const Student = db.model('student');

router.get('/', (req, res, next) => {
	Student.findAll({})
	.then(students => {
		res.json(students)
	})
	.catch(next)
})

router.post('/', (req, res, next) => {
	Student.create(req.body)
	.then(newStudent => {
		res.json(newStudent)
	})
	.catch(next)
})

router.get('/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => {
		res.json(student)
	})
	.catch(next)
})

router.put('/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => {
		return student.update(req.body)
	})
	.then(updatedStudent => {
		res.status(204).send(updatedStudent)
	})
	.catch(next)
})

router.delete('/:id', (req, res, next) => {
	Student.destroy({
		where: {
			id : req.params.id
		}
	})
	.then(deletedStudent => {
		res.status(204).send(deletedStudent)
	})
	.catch(next)
})

module.exports = router;