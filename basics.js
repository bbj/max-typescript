var add = function (n1, n2, showResult, phrase) {
    var res = n1 + n2;
    if (showResult) {
        console.log(phrase + res);
    }
    else {
        return n1 + n2;
    }
};
var number1 = 5; // infered type: "const number1: 5"; if use let, would be "let number1: number"
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'the result is ';
add(number1, number2, printResult, resultPhrase); //the result is 7.8
//type inferance is here to save us to write some code
//this is the core job of typescript to check types and yell!!
var number3 = 10; // this redundant to specify ": number" as type is easily infered by TS
var number4; // here we need to specify ": number" as variable is not initialised
//number4 = "foo";            // compiler error
var number5; // infered type: 'let number5: any'
number5 = 5; // ok as number5 was infered to type 'any'
number5 = 'foo'; // still an 'any', so no error
