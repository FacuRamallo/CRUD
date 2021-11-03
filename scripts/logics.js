import { buyList } from "./data.js";
import { deleteRenderById, modifyInputPlaceHolder, renderListById, resetInputValue, resetListRender } from "./display.js";
import { ListElement } from "./ListElement.js";
///////BUTTONS FUNCTIONS//////////////////
export function addButtonFunction() {
    pushElementIntoList(buyList,createBuyListElements())
    deleteRenderById("listdisplay");
    renderListById(buyList,"listdisplay");
    let deleteButtons = document.getElementsByClassName("deleteButton");
    addEventToDeleteButtons(deleteButtons);

}

export function deleteButtonFunction(){
    let buttonId=this.id;
    deleteListElementFromButton(buttonId,buyList);
}


//////LOGIC FUNCTION//////////////

//function to create a new ListElement
export function createBuyListElements() {
    let elementToAdd= new ListElement(randomNumber(),getUserValue("input"));
    return elementToAdd;
}

//function to push ListElement created into buyList
export function pushElementIntoList(listoToPushIn,elementToPush) {
    listoToPushIn.push(elementToPush);
}

//function that return a random number
export function randomNumber() {
    let randomNum = Math.floor(Math.random()*1000);
    return randomNum;
}

//function to read user input
export function getUserValue(fromId) {
    let userValue = document.getElementById(`${fromId}`).value;
    return userValue;
} 

//funtion to save a list of objects in local storage
export function setLocalStorageList(listToStorage) {
    localStorage.setItem("List",JSON.stringify(listToStorage));
}

//funtion to get a list from local storage
export function getLocalStorageList(listkeyInLocalStorage) {
    let listReturned = JSON.parse(localStorage.getItem(listkeyInLocalStorage));
    return listReturned
}

//function to reset app
export function resetApp() {
    localStorage.setItem("List","");
}

//funtion to delete an element from the list
export function deleteListElementFromButton(idFromButton,fromList) {
    deleteRenderById("listdisplay")
    let index = fromList.findIndex(item => item.id === idFromButton);
    fromList.splice(index,1);
    renderListById(buyList,"listdisplay");
    let deleteButtons = document.getElementsByClassName("deleteButton");
    addEventToDeleteButtons(deleteButtons)
}

export function addEventToDeleteButtons(deleteButtons) {
    for (const i of deleteButtons) {
        i.addEventListener("click",deleteButtonFunction)
    }
}