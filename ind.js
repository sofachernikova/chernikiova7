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
const celcius = 18
const fahrenheit = 60

console.log(celcius + '\xB0C' + ' соответствует ' + (1.8 * celcius + 32) + '\xB0F')
console.log(fahrenheit + '\xB0F' + ' соответствует ' + Math.round((fahrenheit - 32) / 1.8) + '\xB0C')

// Задание 4

console.log('Задание 4')
let year = window.prompt(`Введите год`);

if (year % 4 == 0 && year % 100 != 0 && year % 400 == 0) {
    alert ('True')
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