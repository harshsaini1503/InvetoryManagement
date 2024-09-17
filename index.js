let inventory = [];

function addItem(inventory, item) {
    inventory.push(item);
}

function updateItem(inventory, id, newDetails) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            inventory[i] = { ...inventory[i], ...newDetails };
            return;
        }
    }
    console.log('Item not found');
}

function deleteItem(inventory, id) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            inventory.splice(i, 1);
            return;
        }
    }
    console.log('Item not found');
}

function getItem(inventory, id) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            return inventory[i];
        }
    }
    return 'Item not found';
}

function printInventory(inventory) {
    console.log('Inventory:');
    for (let i = 0; i < inventory.length; i++) {
        console.log(`Id: ${inventory[i].id}, Name: ${inventory[i].name}, Quantity: ${inventory[i].quantity}, Price: $${inventory[i].price}`);
    }
}

console.log("Initial Inventory:");
printInventory(inventory);

addItem(inventory, { id: 1, name: 'Apple', quantity: 10, price: 0.5 });
addItem(inventory, { id: 2, name: 'Banana', quantity: 20, price: 0.2 });
console.log("\nAfter Adding Items:");
printInventory(inventory);

updateItem(inventory, 2, { quantity: 30, price: 0.25 });
console.log("\nAfter Updating Item:");
printInventory(inventory);

deleteItem(inventory, 1);
console.log("\nAfter Deleting Item:");
printInventory(inventory);

console.log("\nGet Item with id 2:");
console.log(getItem(inventory, 2));
