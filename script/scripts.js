window.setInterval(takeTableContent,1000);


document.getElementById('button-important').addEventListener('click', function(){
    searchEmptyCellImportant();
});

function createImportantRow(){
    let addRow = "<tr>\n" +
        "            <td class=\"important \" contenteditable=\"true\"></td>\n" +
        "            <td class=\"less-important  border-0\"></td>\n" +
        "            <td class=\"not-important  border-0\"></td>\n" +
        "        </tr>"

    document.getElementById('main-table').innerHTML += addRow;

}
function searchEmptyCellImportant(){

    let rows = document.getElementById('table').rows,
        len = rows.length,
        i,
        columnNumber = 0,
        cell;
    for(i = 0; i<len ; i++){
        cell = rows[i].cells[columnNumber];
        if(cell.innerHTML ===""){
            cell.setAttribute("contenteditable", "true");
            cell.setAttribute("class", "important");
            return;
        }else if(cell.value!==null && i==(len-1)){
        createImportantRow();
        }
    }
}


document.getElementById('button-less-important').addEventListener('click', function(){
    searchEmptyCellLessImportant();
});
function createLessImportantRow(){
    let addRow = "<tr>\n" +
        "            <td class=\"important   border-0\"></td>\n" +
        "            <td class=\"less-important\" contenteditable=\"true\"></td>\n" +
        "            <td class=\"not-important  border-0\"></td>\n" +
        "        </tr>"
    document.getElementById('main-table').innerHTML += addRow;

}

function searchEmptyCellLessImportant(){

    let rows = document.getElementById('table').rows,
        len = rows.length,
        columnNumber =1,
        i,
        cell;
    for(i = 0; i<len ; i++){
        cell = rows[i].cells[columnNumber];
        if(cell.innerHTML ===""){
            cell.setAttribute("contenteditable", "true");
            cell.setAttribute("class", "less-important");
            return;
        }else if(cell.value!==null && i==(len-1)){
            createLessImportantRow();
        }
    }

}

document.getElementById('button-not-important').addEventListener('click', function(){
    searchEmptyCellNotImportant();
});
function createNotImportantRow(){
    let addRow = "<tr>\n" +
        "            <td class=\"important   border-0\"></td>\n" +
        "            <td class=\"less-important\" contenteditable=\"true\"></td>\n" +
        "            <td class=\"not-important  border-0\"></td>\n" +
        "        </tr>"
    document.getElementById('main-table').innerText += addRow;

}

function searchEmptyCellNotImportant(){

    let rows = document.getElementById('table').rows,
        len = rows.length,
        columnNumber = 2,
        i,
        cell;
    for(i = 0; i<len ; i++){
        cell = rows[i].cells[columnNumber];
        if(cell.innerHTML ===""){
            cell.setAttribute("contenteditable", "true");
            cell.setAttribute("class", "not-important");
            return;
        }else if(cell.value!==null && i==(len-1)){
            createNotImportantRow();
        }
    }

}

function takeTableContent(){
    let tableArr = [];
    let rows = document.getElementById('table').rows,
        len = rows.length,
        id=0,
        i = 1;

    for (i; i<len; i++){
        tableArr.push(new TableRows(id,rows[i].cells[0].innerText, rows[i].cells[1].innerText, rows[i].cells[2].innerText));
        id+=3;
    }


    console.log(tableArr);
    localStorage.removeItem('table');
    localStorage.setItem('table', JSON.stringify(tableArr));
}


function TableRows(idN, firstColumn, secondColumn, thirdColumn){
    this.firstColumn = {columnNr:firstColumn, id: idN+1};
    this.secondColumn = {columnNr:secondColumn, id: idN+2};
    this.thirdColumn = {columnNr:thirdColumn, id: idN+3};
}


function createNewTable(){
    let tableArr = JSON.parse(localStorage.getItem('table'));

    for (let i=0; i<tableArr.length; i++) {
        let addRow = "<tr>\n" +
            "            <td class=\"important \"  contenteditable=\"true\">"+ tableArr[i].firstColumn.columnNr +"</td>\n" +
            "            <td class=\"less-important\" contenteditable=\"true\">"+ tableArr[i].secondColumn.columnNr +"</td>\n" +
            "            <td class=\"not-important\"  contenteditable=\"true\">"+ tableArr[i].thirdColumn.columnNr +"</td>\n" +
            "        </tr>"
        document.getElementById('main-table2').innerHTML += addRow;
    }
}

