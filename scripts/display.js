
export function li_Template(description,liId,sectionToRenderIn) {
    sectionToRenderIn.innerHTML += `<li id="${liId}">${description}
                                        <button class="deleteButton" id="${liId}" >Delete</button>
                                        <button class="updateButton" id="${liId}" >Update</button>
                                    </li>`
}

export function printInConsole(whatToPrint) {
    console.log(whatToPrint);
    return 
}
export function deleteRenderById(id) {
    document.getElementById(`${id}`).innerHTML=null;
}
export function renderInputById(idToPrintIn,newPlaceHolder,newInicialValue) {
    let sectionToRenderIn = document.getElementById(`${idToPrintIn}`);
    sectionToRenderIn.innerHTML =   `<input type="text" id="update2" class="update" placeholder=${newPlaceHolder} value=${newInicialValue}>
                                    <button class="deleteButton" id="${idToPrintIn}" >Delete</button>
                                    <button class="updateButton" id="${idToPrintIn}" >Update</button>`
                                    
}

export function renderListById(listToPrint,idToPrintIn) {
    let sectionToRenderIn = document.getElementById(`${idToPrintIn}`);
    listToPrint.forEach(element => {
        li_Template(element.description,element.id,sectionToRenderIn)
    });
    return 
}

export function modifyInputPlaceHolderById(id,newText) {
    let input = document.getElementById(`${id}`);
    input.placeholder = `${newText}`;
    return
}

export function modifyButtonTextById(id,newText) {
    document.getElementById(`${id}`).textContent = `${newText}`;
    return
}

export function resetInputValue(id) {
    let input = document.getElementById(`${id}`);
    input.value = "";
    return
}

export function resetListRender(){
    let sectionToRenderIn = document.getElementById("listdisplay");
    sectionToRenderIn.innerHTML = "";
}

