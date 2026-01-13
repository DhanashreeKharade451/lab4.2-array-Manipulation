let shoppingList = [];

function addItem(item){

    if (!shoppingList.includes(items)){
        shoppingList.push(item);

    }
    
}

function removeItem(item){
    shoppingList.pop();

}

function displayList(){
    console.log("Shopping List :")
    shoppingList.forEach(item => console.log(item));
}

function filterItems (searchItem){
    return shoppingList.filter(item => 
        item.tolowercase().includes( searchterm.tolowercase())
         );

}
