function plus() {
    let num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    let num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    if (isNaN(num1 && num2)) {
        alert("Ошибка: Введите число!");
        document.getElementById('out').innerHTML = `Ответ: Ошибка`;
        return;
    }

    let result = num1 + num2;
    document.getElementById('out').innerHTML = `Ответ: ${result.toFixed(2)}`;
}

function minus() {
    let num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    let num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    if (isNaN(num1 && num2)) {
        alert("Ошибка: Введите число!");
        document.getElementById('out').innerHTML = `Ответ: Ошибка`;
        return;
    }
    let result = num1 - num2;
    document.getElementById('out').innerHTML = `Ответ: ${result.toFixed(2)}`;
}

function multiply() {
    let num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    let num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    if (isNaN(num1 && num2)) {
        alert("Ошибка: Введите число!");
        document.getElementById('out').innerHTML = `Ответ: Ошибка`;
        return;
    }

    let result = num1 * num2;
    document.getElementById('out').innerHTML = `Ответ: ${result.toFixed(2)}`;
}

function division() {
    let num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);
    let num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    if (isNaN(num1 && num2)) {
        alert("Ошибка: Введите число!");
        document.getElementById('out').innerHTML = `Ответ: Ошибка`;
        return;
    }

    if (num2 === 0) {
        document.getElementById('out').innerHTML = `Ответ: Ошибка - на ноль делить нельзя!`;
        return;
    }
    let result = num1 / num2;

    document.getElementById('out').innerHTML = `Ответ: ${result.toFixed(2)}`;
}

function square() {
    let r = document.getElementById('r').value;
    r = parseFloat(r);

    if (isNaN(r))
        alert("Ошибка: Введите число!");

    let result = 3.14 * r * r;
    document.getElementById('out').innerHTML = `Ответ: ${result.toFixed(2)}`;
}

function fibonacci(num) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
        // [a,b] = [b,c];  либо так
    }
    return b;

}

function fib() {
    let fib = document.getElementById('fib').value;
    fib = parseFloat(fib);

    if (isNaN(fib))
        alert("Ошибка: Введите число!");

    let result = fibonacci(fib);
    document.getElementById('out').innerHTML = `Ответ: ${result.toFixed(2)}`;
}
