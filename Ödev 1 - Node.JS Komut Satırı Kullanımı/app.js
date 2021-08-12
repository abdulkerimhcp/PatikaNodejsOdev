
const arguments = process.argv.slice(2);


function circleArea(radius) {
    return Math.PI * Math.pow(radius,2)
}

let Radius = Number(arguments[0])
let Area = circleArea(Radius)


console.log(`Yarıçapı ${Radius} olan dairenin alanı: ${Area} şeklinde olmalıdır.`)


