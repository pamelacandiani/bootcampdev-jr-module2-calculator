function calc(op){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var output = 0;

    switch(op){
        case '+' : output = num1 + num2; break;
        case '-' : output = num1 - num2; break;
        case '*' : output = num1 * num2; break;
        case '/' : output = num1 / num2; break;
    }

    document.getElementById("output").value = output;

    var newHistoric = "<p>" + num1 + " " + op + " " + num2 + " = " + output + "</p>";
    var historic = document.getElementById("historic")

    historic.innerHTML = newHistoric + historic.innerHTML;

    if(historic.children.length > 10){
        historic.removeChild(historic.childNodes[10]);
    }
}

    