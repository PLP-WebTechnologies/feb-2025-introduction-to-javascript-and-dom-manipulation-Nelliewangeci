
function changeContent() {
    const desc = document.getElementById("description");
    desc.textContent = "The content and style have been changed!";
    desc.style.color = "blue";
    desc.style.fontWeight = "bold";
    desc.style.backgroundColor = "#f0f0f0";
}

function addElement() {
    const container = document.getElementById("dynamic-container");
    if (!document.getElementById("new-element")) {
        const newElem = document.createElement("p");
        newElem.id = "new-element";
        newElem.textContent = "This is a dynamically added paragraph!";
        container.appendChild(newElem);
    }
}

function removeElement() {
    const elem = document.getElementById("new-element");
    if (elem) {
        elem.remove();
    }
}
