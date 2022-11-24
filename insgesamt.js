
//addEventListener    statt onclick
let div1 = document.createElement("div");
div1.id = "logo";
 div1.textContent = "Herbstfrühstück";
let header1 = document.querySelector("header");
header1.append(div1);

let input1 = document.createElement("input");
input1.id = "suchleiste";
input1.placeholder = "Suchen nach Stichwort";
header1.append(input1);

let span1 = document.createElement("span");
span1.addEventListener("click", openNav);
header1.append(span1);

let div2 = document.createElement("div");
div2.className = "menuicon";
div2.addEventListener("click", myFunction);
span1.append(div2);

let div3 = document.createElement("div");
div3.className = "bar1";
div2.append(div3);

let div4 = document.createElement("div");
div4.className = "bar2";
div2.append(div4);

let div5 = document.createElement("div");
div5.className = "bar3";
div2.append(div5);

//Wie bekomme ich die bars angezeigt vom Menü?

element.addEventListener("click", myFunction);

function myFunction(menuicon) {
  openNav()
}

let nav = document.createElement("nav");
 nav.id = "menu";
 header.append(heading, nav);
 let title = ["Inhalt", "Neues Item"];
 let href = ["/index.html", "/form.html"];



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  //header createElement an Position 0
  //appenchild WO Füge ich es ein? header.appendChild oder über Tagnamen
  //Events erstellen für buttons