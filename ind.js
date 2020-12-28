// Задание 1

console.log('Задание 1')
let number = 9
let string = 'Chernikova' 
let bull = true
let nothing = null

console.log(string + number) //string + int == string
console.log(string + bull) //string + boolean == string
console.log(string + nothing) //string + null == string
console.log(number + bull) //int + boolean == int
console.log(number + null) //int + null == int
console.log(bull + null) //boolean + null == int

// Задание 2

console.log('Задание 2')
let a = 5
let b = 10
const perimetr = 2*(a + b)
const ploshad = a * b
const otn = perimetr / ploshad

console.log('Длина a =' + ' ' + a)
console.log('Длина b =' + ' ' + b)
console.log('Периметр:' + ' ' + (perimetr))
console.log('Площадь:' + ' ' + (ploshad))
console.log('Отношение:' + ' ' + (otn))

// Задание 3

console.log('Задание 3')
let celcius = 18
let fahrenheit = 60

console.log(`${celcius} C\u{00B0} соответствует ${celcius * 1.8 + 32} F\u{00B0}`);
console.log(`${fahrenheit} F\u{00B0} соответствует ${(fahrenheit - 32) / 1.8} C\u{00B0}`)

// Задание 4

console.log('Задание 4')
let year = window.prompt(`Введите год`);

if (year % 4 == 0 && year % 100 != 0) {
    alert ('True')
} else if (year % 400 == 0) {

} else {
    alert ('False')
}

// Задание 5

console.log('Задание 5')
let c = Number(prompt(`Первое число`));
let d = Number(prompt(`Второе число`));
if (c == 10 || d == 10 || c + d == 10) {
    console.log ('True')
} else {
    console.log ('False')
}