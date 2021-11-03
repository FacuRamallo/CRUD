
export function li_Template(description,liId,sectionToRenderIn) {
    sectionToRenderIn.innerHTML += `<li id="${liId}">${description}
                                        <button class="deleteButton" id="${liId}" >Delete</button>
                                    </li>`
}

export function printInConsole(whatToPrint) {
    console.log(whatToPrint);
    return 
}
export function deleteRenderById(id) {
    document.getElementById(`${id}`).innerHTML=null;
}

export function renderListById(listToPrint,idToPrintIn) {
    let sectionToRenderIn = document.getElementById(`${idToPrintIn}`);
    listToPrint.forEach(element => {
        li_Template(element.description,element.id,sectionToRenderIn)
    });
    return 
}

export function modifyInputPlaceHolder() {
    let input = document.getElementById("input");
    input.placeholder = "add new product";
    return
}

export function resetInputValue() {
    let input = document.getElementById("input");
    input.value = "";
    return
}

export function resetListRender(){
    let sectionToRenderIn = document.getElementById("listdisplay");
    sectionToRenderIn.innerHTML = "";
}

