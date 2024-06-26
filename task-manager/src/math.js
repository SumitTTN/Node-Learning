const calculateTip = (total,tip=.25)=> total + (total * tip)

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

module.exports= {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit
}