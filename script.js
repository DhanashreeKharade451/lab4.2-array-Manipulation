let shoppingList = [];

function addItem(item){

    if (!shoppingList.includes(items)){
        shoppingList.push(item);

    }
    
}

function removeItem(item){
    shoppingList.pop();

}

function renderList(){
    const ul =document.getElementById("itemList");
    ul.innerHTML = "";


}

function displayList(){
    console.log("Shopping List :")
    shoppingList.forEach(item => console.log(item));
}

function handleAddItem(){
    const input = document.getElementById("itemInput");
    constitem= input.ariaValueMax.trim();
    


if(item !== ""){
    addItem(item);
    renderList();
    input.value = "";
    
}

}