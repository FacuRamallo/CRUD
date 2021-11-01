import { createNewListElement,randomNumber,addElementToBuyList,getUserValue, resetApp, deleteListElement } from "./logics.js";
import {printInConsole, renderList, resetInputValue} from "./display.js"
import {  } from "./data.js";

//to check if storage is supported
if (typeof(Storage) !== "undefined") {
    console.log("LocalStorage disponible");
} else {
    console.log("LocalStorage no soportado en este navegador");
}




let userInput = document.getElementById("addButton");
userInput.addEventListener("click",addElementToBuyList);

let reset = document.getElementById("resetButton");
reset.addEventListener("click",resetApp);

let  deleteButtonList = document.getElementsByClassName("deleteButton");
console.log(deleteButtonList);





