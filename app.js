var bruno = {
    // const bruno = {
    name: 'Bruno',
    age: 57
};
//warning: declaration: const bruno: object = {...} would tell TS that 
//  bruno is an object, without specifying the properties (not specific at all!!!)
//  which means we loose the type check for properties 
//  and we will be able to compile: bruno.nickname
//  and we loose IDE completion for e.g. bruno.name
//ALSO:
//const bruno: {} = { ... } is too general too and equiv to "object"
console.log(bruno); //{name: 'Bruno', age: 57}
//console.log(bruno.nickname)   //app.ts:7:19 - error TS2339: Property 'nickname' does not exist on type '{ name: string; age: number; }'.
