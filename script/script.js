let groceryItems=[];

function getGroceryItems(){

    let numberOfItems=parseInt(prompt("How many items you would like to enter?"));
    for(i=0;i<numberOfItems;i++){
        groceryItems[i]=prompt("Please enter your item #"+(i+1)+":");
    }
    listGroceryItems();
}

function listGroceryItems(){
    document.getElementById("itemsHolder").innerHTML="<ul><li>"+groceryItems.join("<li>");
}

function removeLastItem(){
    alert("Removing "+groceryItems.pop()+" from your list!");
    listGroceryItems();
}

function addAnotherItem(){
    groceryItems.push(prompt("Enter an item to add to your list!"));
    listGroceryItems();
}

function removeChoice(){
        
        var userChoice;
        userChoice=parseInt(prompt("Enter item's # to remove!"));
        alert("Removing "+groceryItems.splice(userChoice-1,1)+" from your list!");
        listGroceryItems();
}
