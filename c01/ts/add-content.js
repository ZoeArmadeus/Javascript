"use strict";
let my_name = "Zoe";
console.log(my_name); /*輸出要用console.log*/
let last_name = "Armadeus";
console.log(last_name);
let chinese_name = "張依婷";
console.log(chinese_name);
let today = new Date();
let hourNow = today.getHours();
let greeting;
if (hourNow > 18) {
    greeting = 'Good evening!';
}
