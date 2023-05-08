//建立變數
let price:number;
let quantity:number;
let total:number;

//給變數值

price = 10;
quantity = 13 ;

//計算
total = price * quantity;

let cost_div = document.getElementById('cost') as HTMLElement;
cost_div.innerText ="$" + total; //.innerText 是置換元素內容的函式
/* if(cost_div != null){
    cost_div.innerText ="$" + total; //string + number =>> string
}
*/
