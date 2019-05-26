const axios = require('axios')
const chalk = require('chalk')

const constant = require('../constant')

const log = console.log

const apiKey = constant.API_KEY_LOCATION
const url = `https://ipfind.co/me?auth=${apiKey}`

module.exports = async () => {
	try {
		const response = await axios.get(url)
    const data = response.data
    return data.city
	} catch(err) {
		log(chalk.bgRedBright('Error when finding your location.\nPlease try again!'))
	}
}