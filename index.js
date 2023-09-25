const incomes = [];
const expenses = [];

const editContainer = document.getElementById("edit-container");
const editName = document.getElementById("edit-name");
const editAmount = document.getElementById("edit-amount");
const editForm = document.getElementById("edit-form");

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
		btnRemove.style.marginRight = "35px";
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
		btnEdit.addEventListener("click", () => editItem(element, listId));
	});
};

function editItem(element, listId) {
	const type = listId === "#list-expenses" ? "expense" : "income";
	editForm.dataset.type = type;
	editForm.dataset.id = element.id;
	editContainer.classList.remove("hidden");
	editName.value = element.name;
	editAmount.value = element.amount;
	const cancelButton = document.getElementById("cancel-btn");
	cancelButton.addEventListener("click", () =>
		editContainer.classList.add("hidden")
	);
}

editForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const id = Number(event.target.dataset.id);
	const type = event.target.dataset.type;
	const items = type === "expense" ? expenses : incomes;
	const listId = type === "expense" ? "#list-expenses" : "#list-incomes";
	editContainer.classList.add("hidden");
	const elementToEdit = items.find((item) => item.id === id);
	elementToEdit.name = editName.value;
	elementToEdit.amount = Number(editAmount.value);
	renderList(items, listId);
	computeTotal();
});

function removeItem(element, items, listId) {
	const indexToRemove = items.findIndex((item) => item === element);
	items.splice(indexToRemove, 1);

	renderList(items, listId);
	computeTotal();
}

document
	.querySelector("#income-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const inputText = document.querySelector("#income-text");
		const inputNum = document.querySelector("#income-amount");
		incomes.push({
			name: inputText.value,
			amount: Number(inputNum.value),
			id: Math.random(),
		});
		renderList(incomes, "#list-incomes");
		inputText.value = "";
		inputNum.value = "";

		computeTotal();
	});

document
	.querySelector("#expense-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const inputText = document.querySelector("#expense-text");
		const inputNum = document.querySelector("#expense-amount");

		expenses.push({
			name: inputText.value,
			amount: Number(inputNum.value),
			id: Math.random(),
		});
		renderList(expenses, "#list-expenses");
		inputText.value = "";
		inputNum.value = "";

		computeTotal();
	});

function computeTotal() {
	const totalIncomes = incomes.reduce((acc, income) => {
		return acc + income.amount;
	}, 0);
	const totalExpenses = expenses.reduce((acc, expense) => {
		return acc + expense.amount;
	}, 0);
	const incomeNum = document.getElementById("income-num");
	incomeNum.textContent = totalIncomes;
	const expenseNum = document.getElementById("expense-num");
	expenseNum.textContent = totalExpenses;
	const totalValue = totalIncomes - totalExpenses;

	const total = document.getElementById("total-value");
	if (totalValue > 0) {
		return (total.textContent = `Możesz jeszcze wydać ${totalValue} złotych`);
	}
	if (totalValue < 0) {
		return (total.textContent = `Bilans jest ujemny. Jesteś na minusie ${totalValue} złotych`);
	}
	return (total.textContent = "Bilans wynosi 0 złotych");
}
