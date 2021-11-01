import { listElement } from "./data.js";
import { modifyInputPlaceHolder, renderList, resetInputValue, resetListRender } from "./display.js";

//funtion to create a list from user entries
export function createNewListElement() {
    let elementToAdd = new listElement(randomNumber(),getUserValue());
    return elementToAdd;
}     
//Function to add a new element to our "to buy" list
export function addElementToBuyList() {
    
    if (document.getElementById("input").placeholder == "Enter the first product") {
        let storageBuyList = [createNewListElement()];
        setLocalStorageList(storageBuyList);
        modifyInputPlaceHolder();
        resetInputValue();
        renderList(getLocalStorageList("List"))
        return 
    } else {
        resetListRender();
        let actualList = getLocalStorageList("List")
        let newElement = [createNewListElement()];
        let storageBuyList = [];
        storageBuyList = newElement.concat(actualList);
        setLocalStorageList(storageBuyList);
        resetInputValue();
        renderList(getLocalStorageList("List"));
        return 
    }
    
}

//function that return a random number
export function randomNumber() {
    let randomNum = Math.floor(Math.random()*100);
    return randomNum;
}

//function to read user input
export function getUserValue() {
    let userValue = document.getElementById("input").value;
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

export function deleteListElement() {
    
}