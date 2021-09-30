function deleteBtn(modelId){

    let dataTable = document.getElementById("data");


    for (let i = 2; i < dataTable.childNodes.length; i++){

        let value = dataTable.childNodes[i];

        for (let childNode of value.childNodes) {
            if (childNode.childNodes[0].id === modelId){
                dataTable.removeChild(value);
                break;
            }
        }
    }
}

function editBtn(modelId){
    let tmpFirstName = document.getElementById("first");
    let tmpLastName = document.getElementById("last");
    let tmpId = document.getElementById("id");
    let tmpDate = document.getElementById("date");
    let tmpTel = document.getElementById("tel");
    let tmpEmail = document.getElementById("email");
    let parentNode = document.getElementById(modelId).parentNode.parentNode;

    tmpId.value = parentNode.children[0].innerHTML;
    tmpFirstName.value = parentNode.children[1].innerText;
    tmpLastName.value = parentNode.children[2].innerText;
    tmpDate.value = parentNode.children[3].innerText;
    tmpTel.value = parentNode.children[4].innerText;
    tmpEmail.value = parentNode.children[5].innerText;

    document.getElementById("add").innerText = "Speichern";
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
    //btn.value = modelId;
    btn.appendChild(img);
    col.appendChild(btn);
    tr.appendChild(col);

    btn.addEventListener("click", function() {
        callback(modelId);
    });
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

