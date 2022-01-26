const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    let res = n1 + n2;
    if (showResult) {
        console.log(phrase + res);
    } else {
        return n1 + n2;
    }
}

const number1 = 5;          // infered type: "const number1: 5"; if use let, would be "let number1: number"
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'the result is ';
add(number1, number2, printResult, resultPhrase); //the result is 7.8

//type inferance is here to save us to write some code
//this is the core job of typescript to check types and yell!!
let number3: number = 10;   // this redundant to specify ": number" as type is easily infered by TS
let number4: number;        // here we need to specify ": number" as variable is not initialised
//number4 = "foo";            // compiler error
let number5;                // infered type: 'let number5: any'
number5 = 5;                // ok as number5 was infered to type 'any'
number5 = 'foo';            // still an 'any', so no error
