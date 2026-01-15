let shoppingList = [];

function addItem(item) {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
    } else {
        alert("Item already exists!");
    }
}

function removeLastItem() {
    shoppingList.pop();
}

function displayList() {
    const list = document.getElementById("displayItems");
    list.innerHTML = "";

    shoppingList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function filterItems(searchTerm){
    return shoppingList.filter(item => 
        item.toLowercase().includes(searchTerm.toLowercase())
    );

}

function handleAddItem() {
    const input = document.getElementById("itemInput");
    const item = input.value.trim();

    if (item !== "") {
        addItem(item);
        displayList();
        input.value = "";
    }
}

function handleRemoveItem() {
    removeLastItem();
    displayList();
}