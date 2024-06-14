const currentFilter = document.querySelector("#current_filter");
const dropdownContent = document.querySelector(".dropdown_content");
const btnDrop = document.querySelector(".btn_drop");

const btnSortPop = document.querySelector(".sort-by-pop");
const btnSortDate = document.querySelector(".sort-by-date");
const btnSortTitle = document.querySelector(".sort-by-title");

// Function to rearrange the list items
function reorderList(selectedItem) {
	const items = Array.from(dropdownContent.children);
	const selectedItemIndex = items.findIndex((item) =>
		item.contains(selectedItem)
	);

	// Remove the selected item from its current position
	const [selectedLi] = items.splice(selectedItemIndex, 1);

	// Add the selected item to the beginning of the list
	dropdownContent.insertBefore(selectedLi, dropdownContent.firstChild);
}

// Event listeners for each button
btnSortPop.addEventListener("click", function () {
	currentFilter.innerHTML = "Popularité";
	reorderList(btnSortPop);
	if (btnDrop.style.zIndex === "-10") {
		btnDrop.style.zIndex = "100";
	}
});

btnSortDate.addEventListener("click", function () {
	currentFilter.innerHTML = "Date";
	reorderList(btnSortDate);
	if (btnDrop.style.zIndex === "-10") {
		btnDrop.style.zIndex = "100";
	}
});

btnSortTitle.addEventListener("click", function () {
	currentFilter.innerHTML = "Titre";
	reorderList(btnSortTitle);
	if (btnDrop.style.zIndex === "-10") {
		btnDrop.style.zIndex = "100";
	}
});

// Keyboard navigation

// Make .btn_drop unfocusable
btnDrop.setAttribute("tabindex", "-1");
// TODO : display .dropdown_content on top of .btn_drop & make .dropdown height 150px when a sort-by button is focused

btnSortPop.addEventListener("focus", function () {
	btnDrop.style.zIndex = "-10";
});
btnSortPop.addEventListener("blur", function () {
	btnDrop.style.zIndex = "100";
});

btnSortDate.addEventListener("focus", function () {
	btnDrop.style.zIndex = "-10";
});
btnSortDate.addEventListener("blur", function () {
	btnDrop.style.zIndex = "100";
});

btnSortTitle.addEventListener("focus", function () {
	btnDrop.style.zIndex = "-10";
});
btnSortTitle.addEventListener("blur", function () {
	btnDrop.style.zIndex = "100";
});
