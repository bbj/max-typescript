const bruno: {   //would be a correct declaration but redundant here!
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]                      //TS tuple! : exactely 2 elements, in 0 a number, in 1 a string
} = {
    //const bruno = {
    name: 'Bruno',
    age: 57,
    hobbies: ['Sports', 'Cooking'],             //infered: (property) hobbies: string[]
    role: [2, 'author']                         //infered: (property) role: (string | number)[]; this is 'union' type
}

//why we need tuple type declaration:
bruno.role.push('admin');                       // tuple: we only need 2 elements but TS doesn't know it 
//     => with tuple declaration, this error cannot be catched :(
//bruno.role[1] = 10;                           // without tuple, it works as type is (string | number)[]
//     => explicit type declaration above: `role: [number, string]`
//     => Type 'number' is not assignable to type 'string'.
//bruno.role = [];     //Type '[]' is not assignable to type '[number, string]'. Source has 0 element(s) but target requires 2.
//bruno.role = [1];    //Type '[number]' is not assignable to type '[number, string]'. Source has 1 element(s) but target requires 2.

for (const hobby of bruno.hobbies) {            //hobbies is a: string[]
    console.log(hobby.toUpperCase());           //IDE completion and no complain as TS knows it is a string (EASIER & SECURE!)
    //console.log(hobby.map());                 //ERROR:Property 'map' does not exist on type 'string'.
}

let favoriteActivities: string[];               //an array of strings
//favoriteActivities = ['foo', 1];              //ERROR:Type 'number' is not assignable to type 'string'.
favoriteActivities = ['foo'];                   //ok
//favoriteActivities = 'foo';                   //ERROR:Type 'string' is not assignable to type 'string[]'.

console.log(bruno)              //{name: 'Bruno', age: 57}
//console.log(bruno.nickname)   //app.ts:7:19 - error TS2339: Property 'nickname' does not exist on type '{ name: string; age: number; }'.

//warning: declaration: const bruno: object = {...} would tell TS that 
//  bruno is an object, without specifying the properties (not specific at all!!!)
//  which means we loose the type check for properties 
//  and we will be able to compile: bruno.nickname
//  and we loose IDE completion for e.g. bruno.name
//ALSO:
//const bruno: {} = { ... } is too general too and equiv to "object"