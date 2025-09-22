/*
Build an Inventory Management Program

In this lab, you will build an inventory management program that will allow you to add, update, find and remove products from the inventory. You will use an array of objects to represent your inventory, where each object will have name and quantity as the keys.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should declare an empty array named `inventory` that will store product objects having a key `name` with the value of a lowercase string, and a key `quantity` with the value of an integer.
    2. You should create a function named `findProductIndex` that takes the product name as its argument and returns the index of the corresponding product object inside the `inventory` array. The function should always use the lowercase form of the product name to perform the search. If the product is not found, the function should return -1.
    3. You should create a function named `addProduct` that takes a product object as its argument.
    4. If the product is already present in the inventory, the `addProduct` function should update its `quantity` value and log to the console the product name followed by a space and `quantity updated`.
    5. If the product is not present in the inventory, the `addProduct` function should push the product to the `inventory` array and log the product name to the console, followed by a space and `added to inventory`.
    6. You should create a function named `removeProduct` that takes the product name and quantity as its arguments.
    7. The `removeProduct` function should subtract the passed quantity from the corresponding product object inside the inventory and log the string `Remaining <product-name> pieces: <product-quantity>` to the console, where `<product-name>` should be replaced by the product name, and `<product-quantity>` should be replaced by the product quantity.
    8. If the quantity after the subtraction is zero, `removeProduct` should remove the product object from the inventory. If the quantity in the inventory is not enough to perform the subtraction, the `removeProduct` function should log the string` Not enough <product-name> available, remaining pieces: <product-quantity>` to the console.
    9. If the product to remove is not present in the inventory, the `removeProduct` function should log `<product-name> not found` to the console.

Note: To prevent conflicts, keep only the logging mentioned in the user stories when running tests.
*/
const inventory = [];

const findProductIndex = (productName) => {
	return inventory.findIndex(
		(prod) => prod.name === productName.toLowerCase()
	);
};

const addProduct = (product) => {
	const { name: productName, quantity } = product;

	const indexProd = findProductIndex(productName.toLowerCase());

	if (indexProd === -1) {
		inventory.push({
			name: productName.toLowerCase(),
			quantity,
		});
		console.log(`${productName.toLowerCase()} added to inventory`);
		return;
	}

	inventory[indexProd].quantity += quantity;
	console.log(`${productName.toLowerCase()} quantity updated`);
};

const removeProduct = (productName, quantity) => {
	const indexProd = findProductIndex(productName.toLowerCase());

	if (indexProd === -1) {
		console.log(`${productName.toLowerCase()} not found`);
		return;
	}

	const product = inventory[indexProd];
	const newQuantity = product.quantity - quantity;

	if (newQuantity === 0) {
		inventory.splice(indexProd, 1);
		return;
	}

	if (newQuantity < 0) {
		console.log(
			`Not enough ${product.name} available, remaining pieces: ${product.quantity}`
		);
	} else {
		product.quantity = newQuantity;
		console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
	}
};
