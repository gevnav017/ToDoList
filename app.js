const root = document.getElementById('root');

// create input and button elements
const input = document.createElement('input');
const addBtn = document.createElement('button');
addBtn.textContent = 'Add Grocery';

// add input and button to root div
root.appendChild(input);
root.appendChild(addBtn);

// create elements to hold grocery list
const groceryListContainer = document.createElement('div');
const groceryListTitle = document.createElement('h3');
const gorceryList = document.createElement('ul');

// add unpurchased grocery list to root div
groceryListContainer.appendChild(groceryListTitle);
groceryListContainer.appendChild(gorceryList);
root.appendChild(groceryListContainer);
groceryListTitle.textContent = 'Unpurchased';

// create elements to hold unpurchased grocery list
const groceryPurchasedListContainer = document.createElement('div');
groceryPurchasedListContainer.classList.add('purchased');
const groceryPurchasedListTitle = document.createElement('h3');
const groceryPurchasedList = document.createElement('ul');

// add purchased grocery list to root div
groceryPurchasedListContainer.appendChild(groceryPurchasedListTitle);
groceryPurchasedListContainer.appendChild(groceryPurchasedList);
root.appendChild(groceryPurchasedListContainer);
groceryPurchasedListTitle.textContent = 'Purchased';

// function to add item to grocery list
const groceryItemsList = () => {
    const item = input.value;

    if (item.length > 0) {
        // create unpurchased section
        const listItem = document.createElement('li');
        const checkBox = document.createElement('input');
        const deleteBtn = document.createElement('button');
        checkBox.classList.add('item-check');
        checkBox.type = 'checkbox';
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('item-delete');
        listItem.textContent = item;
        listItem.appendChild(checkBox);
        listItem.appendChild(deleteBtn);
        gorceryList.appendChild(listItem);
    }

    // delete from grocery list function
    const deleteBtn = document.querySelectorAll('.item-delete');
    deleteBtn.forEach((e) => {
        e.addEventListener('click', () => {
            e.parentElement.remove();
        });
    });

    // move item to purchased list
    const checkedItem = document.querySelectorAll('.item-check');
    checkedItem.forEach((e) => {
        e.addEventListener('click', () => {
            // create purchased section
            const lineItem = e.parentElement;
            lineItem.style.textDecoration = 'line-through';
            groceryPurchasedList.appendChild(lineItem);
        });
    });
};

// event to add item to grocery list
addBtn.addEventListener('click', groceryItemsList)
