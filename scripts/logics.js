import { listElement } from "./data.js";

//funtion to create a list from user entries
export function CreateListFromUserEntries(listToCreate) {
    let inputListElementDescription = prompt("Entrer your list elements ono by one\nWhen you are done enter the key word 'end'");
    let i=0;
    while (inputListElementDescription != "end") {
        listToPush[i]= new listElement(randomNumber(),inputListElementDescription);
        i+=1;
        inputListElementDescription = prompt("Entrer your list elements ono by one\nWhen you are done enter the key word 'end'");
    } 
    return listToCreate
}

//Function to add a new element to our "to buy" list
export function addElementToList(element,listToPush) {
    listToPush.push(element);
    return
}

//function that return a random number
export function randomNumber() {
    let randomNum = Math.floor(Math.random()*100);
    return randomNum;
}