function editBtn(modelDd){
    let tmpFirstName = document.getElementById("first");
    let tmpLastName = document.getElementById("last");
    let tmpId = document.getElementById("id");
    let tmpDate = document.getElementById("date");
    let tmpTel = document.getElementById("tel");
    let tmpEmail = document.getElementById("email");
    let parentNode = document.getElementById(modelDd).parentNode;

    tmpFirstName = parentNode[0];

}

function addTableDataButtonIcon(icon, tr, modelId, callback){
    let col = document.createElement("td");
    let btn = document.createElement("button");
    let img = document.createElement("i");

    for (let pic of icon.split(" ")) {
        img.classList.add(pic);
    }
    btn.classList.add("w3-button");
    btn.classList.add("w3-margin");
    btn.id = modelId;
    btn.appendChild(img);
    col.appendChild(btn);
    tr.appendChild(col);
}

function createTableRow() {
    let tmpRow = document.createElement("tr");

    document.getElementById("data").appendChild(tmpRow);

    return tmpRow;
}

function createTableData(tex, tr) {

    let tmpCol = document.createElement("td");
    let value = document.createTextNode(tex);

    if (tr.childElementCount > 2) {
        tmpCol.style.display = "none";
    }

    tmpCol.appendChild(value);
    tmpCol.classList.add("w3-margin");
    tr.appendChild(tmpCol);
}

function seachRecord() {
    var input, filter, table, tr, td, i, txtValue;
    let found = false;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        found = false;
        for (let j = 0; j < td.length; j++)
        if (td[j]) {
            txtValue = td[j].textContent || td[j].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || found) {
                tr[i].style.display = "";
                found = true;
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
/*
function seachRecord() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
 */

