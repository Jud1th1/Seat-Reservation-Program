//add object ..... (next lesson)

function makeRows(sectionLength, rowLength, placement){
    const rows = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t"];

    let html ="";
    let counter = 1;

    rows.forEach (row => {
        
        switch(placement){
            //make label
            case "left": html += `<div class="label">${row}</div>`; break; //don't forget to add BREAK!
            //add 12 to the counter
            case "right": counter = counter + (rowLength - sectionLength); break;//row 15 - section 3 = 12
            //add 3 to the counter
            default: counter = counter + (rowLength - sectionLength)/2;  break;
        }

        //loop in here 
            for(let i=0; i < sectionLength; i++){
            //nested loop to generate seats for each row
            html += `<div class="a" id="${row + counter}">${counter}</div>`;
            counter++;
        }

        switch(placement){
            //add 12 to the counter
            case "left": counter = counter + (rowLength - sectionLength); break;
            //add the label
            case "right": html += `<div class="label">${row}</div>`; break; 
            //add 3 to the counter
            default: counter = counter + (rowLength - sectionLength)/2; break;
        }

    });
    document.getElementById(placement).innerHTML = html;
}

makeRows(3, 15, 'left');
makeRows(3, 15, 'right');
makeRows(9, 15, 'middle');
