import { addButtonFunction, createBuyListElements,pushElementIntoList,deleteButtonFunction} from "./logics.js";
import {printInConsole, renderListById, resetInputValue} from "./display.js"
import {buyList,  } from "./data.js";
import { ListElement } from "./ListElement.js";

//to check if storage is supported
if (typeof(Storage) !== "undefined") {
    console.log("LocalStorage disponible");
} else {
    console.log("LocalStorage no soportado en este navegador");
}


//////////////////////MAIN/////////////////////////
let userInput = document.getElementById("addButton");
userInput.addEventListener("click",addButtonFunction);
