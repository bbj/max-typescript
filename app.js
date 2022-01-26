// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
var add = function (n1, n2, showResult, phrase) {
    var res = n1 + n2;
    if (showResult) {
        console.log(phrase + res);
    }
    else {
        return n1 + n2;
    }
};
var number1 = 5; //same type as 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'the result is ';
add(number1, number2, printResult, resultPhrase);
