//Write your function calls below this line
/* global $ */
function setColor(row, col, color) {
    var cell = $('#t')[0].rows[row].cells[col];
    cell.style.backgroundColor = color;
}
// Write your code below this line
for(var i = 0;i < 10;i++){
    for(var x = 3;x < 7;x++){
    setColor(i,x,"white");
    }
}
for(var i = 0;i < 10;i++){
    for(var x = 0;x < 3;x++){
    setColor(i,x,"green");
    }
}
for(var i = 0;i < 10;i++){
    for(var x = 7;x < 10;x++){
    setColor(i,x,"red");
    }
}