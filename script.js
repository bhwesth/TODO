const form = document.getElementById("form")

function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target
    const inputElement = formElement[0]
    let value = inputElement.value.trim()
    if (value !== "") {
        let element = document.createElement("li")
        element.innerHTML = `
        <span>
            ${value}
        </span>
        <button id="delete-button">
            Slet
        </button>
        `
        element.addEventListener("click", handleCompleted)
        liste.append(element)
        document.getElementById("delete-button").addEventListener("click", handleClick)
    }
    form.reset()
}

function handleCompleted(event) {
  event.target.classList.toggle("complete");
}

function handleClick(event) {
    console.log(event);
    const listItem = event.target.parentElement;
    listItem.remove();
}

function deleteIfComplete(element) {
    console.log(element.classList.contains("complete"))
    if (element.classList.contains("complete")) {
        element.remove()
    }
}

function handleDeleteAll(event) {   
    const list = document.getElementById("liste")
    console.log(list.childNodes)
    list.childNodes.forEach(deleteIfComplete)
}

document.getElementById("delete-all").addEventListener("click", handleDeleteAll)

form.addEventListener("submit", handleSubmit)
