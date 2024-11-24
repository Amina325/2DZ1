var number = prompt("Оцените наш сервис")

if (number > 5 && number >= 10) {
    alert ("Спасибо за высокую оценку")
} else if (number < 5) {
    alert ("Мы работаем над улучшением сервиса")
} else {
    alert("Введите цифру")
}