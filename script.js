
//Task 1: Array Manipulation Basics
let shoppingList = [];

function addItem(item){
     
    //shoppingList.push(item);

    if (!shoppingList.includes(item)){
        shoppingList.push(item);  //

    } else {
        console.log("Item Already Exist");
    }
    
}

function removeLastItem(item){
    shoppingList.pop();

}

function displayList(){
    console.log("Shopping List :");
    shoppingList.forEach(item => console.log(item));
}

function filterItems(searchTerm){
     return shoppingList.filter(item =>
item.toLowerCase().includes(searchTerm.toLowerCase()) );
}



function handleAddItem(){
    const input = document.getElementById("itemInput");
    const item= input.ariaValueMax.trim();

    if(item !== ""){
        addItem(item);
        updateListDisplayu();
        input.value = "";
        
    }
    
}

