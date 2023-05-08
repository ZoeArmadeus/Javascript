let user_name:string;
let message:string;

user_name = "Zoe";
message = "when I see you again";

let name_span = document.getElementById('name') as HTMLElement //避開null錯誤發生
name_span.innerText = user_name;

let note_div = document.getElementById('note') as HTMLElement
note_div.innerText = message;