let allTemperatures = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5/9,
        kelvin: ((fahrenheit - 32) * 5/9) + 273.15
    }
}

let temperaturesFor32 = allTemperatures(32)
console.log(`${temperaturesFor32.fahrenheit} in Fahrenheit is ` +
            `${temperaturesFor32.celsius} in Celsius and ` +
            `${temperaturesFor32.kelvin} in Kelvin`)

let temperaturesFor74 = allTemperatures(74)
console.log(`${temperaturesFor74.fahrenheit} in Fahrenheit is ` +
            `${temperaturesFor74.celsius} in Celsius and ` +
            `${temperaturesFor74.kelvin} in Kelvin`)