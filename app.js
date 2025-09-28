document.addEventListener('DOMContentLoaded', () => {

const newItemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const myList = document.getElementById('itemList');





addItemButton.addEventListener('click', () => {
    const itemText = newItemInput.value.trim(); 
        if (itemText !== '') { 
                const listItem = document.createElement('li');
                listItem.textContent = itemText;              
                myList.appendChild(listItem);
                newItemInput.value = '';
                const removeButtonInList = document.createElement('button')
                myList.appendChild(removeButtonInList);
                removeButtonInList.textContent = "Remove Item";
                removeButtonInList.addEventListener('click', function(){
                    this.parentElement.remove(listItem)
                });
                const editButtonInList = document.createElement('button')
                myList.appendChild(editButtonInList);
                editButtonInList.textContent = "Edit Item";
                editButtonInList.addEventListener('click', function(){
                    const newItemInput = document.createElement("input")
                    newItemInput.setAttribute('type', 'text')
                    myList.appendChild(newItemInput)
                    const newItemButton = document.createElement('button')
                    myList.appendChild(newItemButton);
                    newItemButton.textContent ="Submit Changes"
                })
                 newItemButton.addEventListener("click", function(){
                     listItem.textContent = newItemInput;
                    
                })  
                const saveItem = document.createElement('button');
                myList.appendChild(saveItem);
                saveItem.textContent = "Save Item"

            }
            
        });










});