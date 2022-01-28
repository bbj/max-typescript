// const bruno: {   //would be a correct declaration but redundant here!
//     name: string,
//     age: number
// } = {
var bruno = {
    name: 'Bruno',
    age: 57,
    hobbies: ['Sports', 'Cooking'] //infered: (property) hobbies: string[]
};
for (var _i = 0, _a = bruno.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
var favoriteActivities; //an array of strings
favoriteActivities = ['foo', 1]; //Type 'number' is not assignable to type 'string'.
favoriteActivities = ['foo']; //ok
favoriteActivities = 'foo'; //Type 'string' is not assignable to type 'string[]'.
//warning: declaration: const bruno: object = {...} would tell TS that 
//  bruno is an object, without specifying the properties (not specific at all!!!)
//  which means we loose the type check for properties 
//  and we will be able to compile: bruno.nickname
//  and we loose IDE completion for e.g. bruno.name
//ALSO:
//const bruno: {} = { ... } is too general too and equiv to "object"
console.log(bruno); //{name: 'Bruno', age: 57}
//console.log(bruno.nickname)   //app.ts:7:19 - error TS2339: Property 'nickname' does not exist on type '{ name: string; age: number; }'.
