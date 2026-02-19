const rows = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t"];

let html ="";
let counter = 1;

rows.forEach (function (row){
    //loop through each row 
    html += `<div class="label>${row}</div>`;

    for(let i=0; i < 3; i++){
        //nested loop to generate seats for each row
        html += `<div id="${row + counter}">${counter}</div>`;
        counter++;
    }

    document.getElementById('left').innerHTML = html;
});