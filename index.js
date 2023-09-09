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

		
		const btnEdit = document.createElement("button");
		btnEdit.style.float = "right";
		btnEdit.style.marginRight = "10px";
		btnEdit.innerHTML = "Edytuj";
		item.appendChild(btnEdit);
	});
};

function removeItem() {
	
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

// const sumLi = (items, listId) => {
// 	const sumOutput = document.querySelector(listId);
// 	list.innerHTML = "";
// 	items.reduce((acc, number) => {
// 		const itemOutput = document.createTextNode(element.amount);
// 		return acc + number;
// 	}, 0);
// 		list.appendChild(itemNum);
// }

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
