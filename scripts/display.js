
export function li_Template(description,id) {
    let sectionToRenderIn = document.getElementById("listdisplay");
    sectionToRenderIn.innerHTML += `<li>${description}
                                        <button class="deleteButton" id="${id}">Delete</button>
                                    </li>`
}

export function printInConsole(whatToPrint) {
    console.log(whatToPrint);
    return 
}


export function renderList(listToPrint) {
    listToPrint.forEach(element => {
        li_Template(element.description,element.id)
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