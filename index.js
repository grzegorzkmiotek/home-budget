const incomeForm = document.getElementById("income-form");

const uiSelectors = {
	switchInput: "switch",
	descriptionInput: "description",
	valueInput: "value",
	enterButton: "[data-enter-button]",
	balanceList: "[data-balance-list]",
	balanceListIncomes: "[data-balance-list-incomes]",
	balanceListExpenses: "[data-balance-list-expenses]",
	itemDescription: "[data-item-description]",
	itemValue: "[data-item-value]",
	deleteButton: "[data-delete-button]",
	editButton: "[data-edit-button]",
	totalBudgetInfo: "[data-total-budget-info]",

	createItem: "[create-item]",
	error: "[data-error]",
};

incomeForm.addEventListener("submit", () => {});

function createItem(id, description, price) {
	return `
	<li id="${id}">
			<p>${description}</p>
			<p>" - "</p>
			<p>${price}</p>
		<button class="float" onclick="addIncome()" data-delete-button>Usuń</button>
		<button class="float" data-enter-button onclick="addIncome()" data-edit-button><p>Edytuj</p></button>
	</li>

<p class="error hide" data-error>Description can't be empty, value must be positive number</p>
	`;
}

function showError() {
	this.error.clasList.remove("hide");
}
function hideError() {
	this.error.clasList.add("hide");
}
