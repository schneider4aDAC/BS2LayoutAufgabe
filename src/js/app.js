function setSidebarState(isOpen)
{
  let tmpSidebar = document.getElementById("sidebar");
  let tmpSidebarContent = document.getElementById("sidebarContent");
  let tmpWiths = tmpSidebar.getAttribute("sidebar-width");

  let tmpWithDict = new Map();

  for(let tmpWith of tmpWiths.split(" "))
  {
    let tmpWithPair = tmpWith.split(":");

    if(tmpWithPair.length > 1)
    {
      tmpWithDict.set(new Number(tmpWithPair[0]), tmpWithPair[1]);
    }
  }

  let tmpWith = null;

  let tmpWithSortedDict = new Map([...tmpWithDict].sort());

  tmpWithSortedDict.forEach(function (value, key) {
    if(window.innerWidth < key)
    {
      tmpWith = value;
    }
  });

  if(tmpWith === null)
  {
    tmpWith = "30"
  }

  if(isOpen) {
    tmpSidebar.style.display = "";
    tmpSidebar.style.width = tmpWith + "%";
    tmpSidebarContent.style.marginLeft = tmpWith + "%";
  }
  else
  {
    tmpSidebar.style.display = "none";
    tmpSidebar.style.width = "0";
    tmpSidebarContent.style.marginLeft = "0";
  }
}

function isSidebarOpen() {
  return document.getElementById("sidebar").style.display != "none";
}

function setAreaState(area) {
    for(let tmpEntry of document.getElementsByClassName("bs2-menu"))
    {
      document.getElementById(
          tmpEntry.getAttribute("menu-target")).style.display = "none";
    }

    document.getElementById(
        area.getAttribute("menu-target")).style.display = "";
}

function onWindowResize()
{
   let tmpHeader = document.getElementsByTagName("header")[0];
   let tmpMain = document.getElementsByTagName("main")[0];
   let tmpFooter = document.getElementsByTagName("footer")[0];
   let tmpBtnAdd = document.getElementById("BtnAdd");

   tmpMain.style.height = (window.innerHeight - tmpHeader.offsetHeight - tmpFooter.offsetHeight)  + "px";

   setSidebarState(isSidebarOpen());
}

document.addEventListener("DOMContentLoaded", function () {

    setSidebarState(false);

    document.getElementById("btnOpenSidebar")
            .addEventListener("click", function () {
        setSidebarState(true);
    });

    document.getElementById("btnCloseSidebar")
        .addEventListener("click", function () {
            setSidebarState(false);
        });

    for(let tmpEntry of document.getElementsByClassName("bs2-menu"))
    {
        tmpEntry.addEventListener("click", function () {
            setAreaState(tmpEntry);
        });
    }

    onWindowResize();

    window.addEventListener("resize", function () {
        onWindowResize();
    });

    document.getElementById("BtnAdd").addEventListener("click", function () {
        if (document.getElementById("addForm").style.display === "none") {
            document.getElementById("addForm").style.display = "";
        } else {
            document.getElementById("addForm").style.display = "none";
        }
    });
/*
    document.getElementById("add").addEventListener("click", function () {
        let tmpFirstName = document.getElementById("first");
        let tmpLastName = document.getElementById("last");
        let tmpId = document.getElementById("id");

        let data = [tmpId.value, tmpFirstName.value, tmpLastName.value];

        let tmpNewRow = createTableRow();

        for (text of data) {
            createTableData(text, tmpNewRow);
        }
    });

 */

    document.getElementById("myInput").addEventListener("keyup", function () {
        seachRecord();
    });

    document.getElementById("myFormId").addEventListener("submit", function (event) {
        event.preventDefault();
        let text;
        let tmpFirstName = document.getElementById("first");
        let tmpLastName = document.getElementById("last");
        let tmpId = document.getElementById("id");
        let tmpDate = document.getElementById("date");
        let tmpTel = document.getElementById("tel");
        let tmpEmail = document.getElementById("email");

        let data = [tmpId.value, tmpFirstName.value, tmpLastName.value, tmpDate.value, tmpTel.value, tmpEmail.value];

        if (document.getElementById("add").innerText === "Hinzufügen") {
            let tmpNewRow = createTableRow();

            for (text of data) {
                createTableData(text, tmpNewRow);
            }

            addTableDataButtonIcon("fas fa-edit", tmpNewRow, tmpId.value, function (modelId) {
                editBtn(modelId);
            });
            addTableDataButtonIcon("far fa-trash-alt", tmpNewRow, tmpId.value, function (modelId) {
                deleteBtn(modelId);
            });

            tmpFirstName.value = null;
            tmpLastName.value = null;
            tmpId.value = null;
            tmpDate.value = null;
            tmpTel.value = null;
            tmpEmail.value = null;
        } else {
            let tmpFirstName = document.getElementById("first");
            let tmpLastName = document.getElementById("last");
            let tmpId = document.getElementById("id");
            let tmpDate = document.getElementById("date");
            let tmpTel = document.getElementById("tel");
            let tmpEmail = document.getElementById("email");

            let parentNode = document.getElementById(tmpId.value).parentNode.parentNode;

            parentNode.children[0].innerHTML = tmpId.value;
            parentNode.children[1].innerText = tmpFirstName.value;
            parentNode.children[2].innerText = tmpLastName.value;
            parentNode.children[3].innerText = tmpDate.value;
            parentNode.children[4].innerText = tmpTel.value;
            parentNode.children[5].innerText = tmpEmail.value;

            tmpFirstName.value = null;
            tmpLastName.value = null;
            tmpId.value = null;
            tmpDate.value = null;
            tmpTel.value = null;
            tmpEmail.value = null;

            document.getElementById("add").innerText = "Hinzufügen";
        }
    });

    document.getElementById("changeAdd").addEventListener("click", function () {
        let tmpFirstName = document.getElementById("first");
        let tmpLastName = document.getElementById("last");
        let tmpId = document.getElementById("id");
        let tmpDate = document.getElementById("date");
        let tmpTel = document.getElementById("tel");
        let tmpEmail = document.getElementById("email");

        tmpFirstName.value = null;
        tmpLastName.value = null;
        tmpId.value = null;
        tmpDate.value = null;
        tmpTel.value = null;
        tmpEmail.value = null;

        document.getElementById("add").innerText = "Hinzufügen";
    })

});