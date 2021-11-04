import { buyList } from "./data.js";
import { deleteRenderById, modifyInputPlaceHolderById, renderListById, resetInputValue, modifyButtonTextById, renderInputById  } from "./display.js";
import { ListElement } from "./ListElement.js";
///////BUTTONS FUNCTIONS//////////////////
export function addButtonFunction() {
    pushElementIntoList(buyList,createBuyListElements());
    deleteRenderById("listdisplay");
    renderListById(buyList,"listdisplay");
    addEventToListButtons("deleteButton",deleteButtonFunction);
    addEventToListButtons("updateButton",updateButtonFunction1);
    resetInputValue("input"); 

}

export function deleteButtonFunction(){
    let buttonId=this.id;
    deleteListElementFromButton(buttonId,buyList);
}

export function updateButtonFunction1() {
    let buttonId=this.id;
    showInputToUpdateItemById(buttonId);
    document.getElementById(buttonId).removeEventListener("click", updateButtonFunction1)
    setTimeout(function(){addEventListener2ToUpdateButton(buttonId)},2000);
}

export function updateButtonFunction2() {
    let buttonId=this.id;
    let newItemDescription = document.getElementById("update2").value;
    buyList.forEach(element => {
        if (element.id == buttonId) {
            element.description = newItemDescription
        }
    });
    deleteRenderById("listdisplay");
    renderListById(buyList,"listdisplay");
    addEventToListButtons("deleteButton",deleteButtonFunction);
    addEventToListButtons("updateButton",updateButtonFunction1);
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
    addEventToListButtons("deleteButton",deleteButtonFunction);
    addEventToListButtons("updateButton",updateButtonFunction1);
}
//function to add an event tu buttons added in each list element
 export function addEventToListButtons(buttonsClass,functionToAply) {
    let buttonType = document.getElementsByClassName(`${buttonsClass}`);
    for (const i of buttonType) {
        i.addEventListener("click",functionToAply)
    }
} 

//function to update de description of a list item displayed 
export function showInputToUpdateItemById(idFromButton) {
    let sectionToUpdate = document.getElementById(idFromButton)
    let inicialValue = sectionToUpdate.textContent;
    console.log(inicialValue)
    renderInputById(idFromButton,"Enter New Item Description",inicialValue)
    
}

export function addEventListener2ToUpdateButton(buttonId) {
    document.getElementById(buttonId).addEventListener("click", updateButtonFunction2)
}