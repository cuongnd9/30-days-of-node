// Kelvin to Fahrenheit
module.exports.toFahrenheit = K => Math.round(K * 9/5 - 459.67)

// Kelvin to Celsius
module.exports.toCelsius = K => Math.round(K - 273.15)

// mps to mph
module.exports.toMph = mps => Math.round(mps * 2.23694)