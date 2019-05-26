const express = require('express')
const controller = require('../controllers/cat.controller')

const router = express.Router()

router.route('/')
	.get(controller.index)
	.post(controller.createCat)

router.route('/:catId')
	.get(controller.getCat)
	.put(controller.updateCat)
	.delete(controller.deleteCat)

module.exports = router