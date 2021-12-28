var calcMain = document.getElementById("culculator");

function number(num) {
    calcMain.value += num;
}

function symbol(sign) {
    calcMain.value += sign;
}

function calculate() {
    calcMain.value = eval(calcMain.value);
}

function clean() {
    calcMain.value = "";
}