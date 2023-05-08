"use strict";
let user_name;
let message;
user_name = "Zoe";
message = "when I see you again";
let name_span = document.getElementById('name'); //避開null錯誤發生
name_span.innerText = user_name;
let note_div = document.getElementById('note');
note_div.innerText = message;
