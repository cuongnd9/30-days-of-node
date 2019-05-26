const axios = require('axios')
const chalk = require('chalk')

const constant = require('../constant')

const log = console.log

const apiKey = constant.API_KEY_TIME

module.exports = async (city) => {
	try {
		const url = `https://api.worldweatheronline.com/premium/v1/tz.ashx?key=${apiKey}&q=${city}&format=json`
		const response = await axios.get(url)
    const data = response.data
    return data.data.time_zone[0].localtime
	} catch(err) {
		log(chalk.bgRedBright('Error when finding your time.\nPlease try again!'))
	}
}