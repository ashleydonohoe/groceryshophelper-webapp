const addItemButton = document.getElementById("new-item-button");
const addItemForm = document.getElementById("new-item");

addItemButton.addEventListener("click", function() {
    if(addItemForm.style.display == "none") {
        addItemForm.style.display = "block";
        addItemButton.textContent = "- Hide Form";
    } else {
        addItemForm.style.display = "none";
        addItemButton.textContent = "+ Add Item";
    }
});
