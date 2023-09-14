const incomes = [];
const expenses = [];

const renderList = (items, listId) => {
	const list = document.querySelector(listId);
	list.innerHTML = "";
	list.classList.remove("removeLi");
	items.forEach((element) => {
		const item = document.createElement("li");
		const itemText = document.createTextNode(element.name + " - ");
		const itemNum = document.createTextNode(element.amount);

		item.appendChild(itemText);
		item.appendChild(itemNum);
		list.appendChild(item);

		const btnRemove = document.createElement("button");
		btnRemove.style.float = "right";
		btnRemove.innerHTML = "Usuń";
		item.appendChild(btnRemove);
		btnRemove.addEventListener("click", () =>
			removeItem(element, items, listId)
		);

		const btnEdit = document.createElement("button");
		btnEdit.style.float = "right";
		btnEdit.style.marginRight = "10px";
		btnEdit.innerHTML = "Edytuj";
		item.appendChild(btnEdit);
		btnEdit.addEventListener("click", () => editItem(element, items, listId));
	});
};

function editItem(element, items, listId) {
	console.log(items);
	const editContainer = document.getElementById("edit-container");
	editContainer.classList.remove("hidden");
	const editName = document.getElementById("edit-name");
	const editAmount = document.getElementById("edit-amount");
	editName.value = element.name;
	editAmount.value = element.amount;
	const cancelButton = document.getElementById("cancel-btn");
	cancelButton.addEventListener("click", () =>
		editContainer.classList.add("hidden")
	);
	const editForm = document.getElementById("edit-form");
	editForm.addEventListener("submit", (event) => {
		event.preventDefault();
		editContainer.classList.add("hidden");
		const elementToEdit = items.find((item) => item.id === element.id);
		elementToEdit.name = editName.value;
		elementToEdit.amount = editAmount.value;
		console.log(items);
		renderList(items, listId);
	});
	renderList(items, listId);
}

function removeItem(element, items, listId) {
	const indexToRemove = items.findIndex((item) => item === element);
	items.splice(indexToRemove, 1);

	renderList(items, listId);
}
document
	.querySelector("#income-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const inputText = document.querySelector("#income-text");
		const inputNum = document.querySelector("#income-amount");
		incomes.push({
			name: inputText.value,
			amount: inputNum.value,
			id: Math.random(),
		});
		renderList(incomes, "#list-incomes");
		inputText.value = "";
		inputNum.value = "";
	});

document
	.querySelector("#expense-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const inputText = document.querySelector("#expense-text");
		const inputNum = document.querySelector("#expense-amount");

		expenses.push({
			name: inputText.value,
			amount: inputNum.value,
			id: Math.random(),
		});
		renderList(expenses, "#list-expenses");
		inputText.value = "";
		inputNum.value = "";
	});

// const sum = items.indexOf(items);
// indexToEdit.splice(sum);

// document.querySelector('#income-sum')
// .addEventListener("submit", function (event) {
// 	const outputNum = document.querySelector('#income-num');
// 	incomes.push({
// 		amountOfAll = outputNum.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
// 	});
// 	renderList(incomes, "#list-sum");
// 	outputNum.value = (amountOfAll);
// }

// document.querySelector('#expense-sum')
// .addEventListener() {
// 	const outputText = document.querySelector('#expense-num')
// }

// const sumLi = (items, listId) => {
// 	const sumOutput = document.querySelector(listId);
// 	list.innerHTML = "";
// 	items.reduce((acc, number) => {
// 		const itemOutput = document.createTextNode(element.amount);
// 		return acc + number;
// 	}, 0);
// 		list.appendChild(itemNum);
// }
