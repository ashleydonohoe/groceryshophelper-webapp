const addItemButton = document.getElementById("new-item-button");
const addItemForm = document.getElementById("new-item");

addItemForm.style.display = "none";


// Toggles hide/show for form
addItemButton.addEventListener("click", function() {
    if(addItemForm.style.display == "none") {
        addItemForm.style.display = "block";
        addItemButton.textContent = "- Hide Form";
    } else {
        addItemForm.style.display = "none";
        addItemButton.textContent = "+ Add Item";
    }
});
