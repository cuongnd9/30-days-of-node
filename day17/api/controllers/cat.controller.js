const db = require('../../models/dbConnection')

module.exports.index =  (req, res) => {
	const sql = 'SELECT * FROM cats'

	db.query(sql, (error, results) => {
		if (error) throw error
		res.json(results)
	})
}

module.exports.post = (req, res) => {
	const data = req.body
	const sql = 'INSERT INTO cats SET ?'

	db.query(sql, data, (error, results) => {
		if (error) throw error
		res.json({ message: 'cat is created!' })
	})
}

module.exports.getCat = (req, res) => {
	const { catId } = req.params
	const sql = 'SELECT * FROM cats WHERE id = ?'

	db.query(sql, [catId], (error, results) => {
		if (error) throw error
		res.json(results)
	})
}

module.exports.updateCat = (req, res) => {
	const { catId } = req.params
	const { name, color } = req.body
	const sql = 'UPDATE cats SET name = ?, color = ? WHERE id = ?'

	db.query(sql, [name, color, catId], (error, results) => {
		if (error) throw error
		res.json({ message: 'cat is updated!' })
	})
}

module.exports.deleteCat = (req, res) => {
	const { catId } = req.params
	const sql = 'DELETE FROM cats WHERE id = ?'

	db.query(sql, [catId], (error, results) => {
		if (error) throw error
		res.json({ message: 'cat is deleted!' })
	})
}