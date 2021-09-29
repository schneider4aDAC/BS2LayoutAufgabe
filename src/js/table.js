function createTableRow() {
    let tmpRow = document.createElement("tr");

    document.getElementById("data").appendChild(tmpRow);

    return tmpRow;
}

function createTableData(tex, tr) {

    let tmpCol = document.createElement("td");
    let value = document.createTextNode(tex);

    tmpCol.appendChild(value);

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

