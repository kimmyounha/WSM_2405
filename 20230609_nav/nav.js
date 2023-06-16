function sayHello(){
    alert("안녕");
}
sayHello();

//1. html -> js
//햄버거 메뉴 -> navToggleDiv
//햄버거 메뉴 i-> nevToggleI
//.nav-list -> navListUl
//const navToggleDiv = document.getElementById("nav_toggle");

const nevToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

//2. Event Hendling
//햄버거 메뉴 클릭하면, 햄버거메뉴 i "bi bi-list"를 x "bi bi-x-lg"로 
//햄버거 메뉴 클랙하면, .nav-list에 .show-menu 보여주기 <-> 안보여주기
nav_toggle.onclick = () =>alert("안녕");//ok
//nav_toggle.onclick = alert("안녕"); //not ok
//-----------------------------------
//HTML -> js
//id
//const navToggleDiv = document.getElementById("nev_toggle");
//nav_toggle; //js변수 규칙은 지켜져야함

//class
//const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];
//tag
//const navToggleDiv = document.getElementsByTagName("div")[0];

//querySelector, querySectorAll
//const navToggleDiv = document.querySelector("#nav_toggle");
//const navToggleDiv = document.querySelectorAll(".#nav_toggle")[0];
//const navToggleDiv = document.querySelectorAll("div")[0];
