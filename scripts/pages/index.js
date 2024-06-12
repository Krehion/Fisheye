async function getPhotographers() {
	const response = await fetch("../../data/photographers.json");
	if (!response.ok) {
		console.log("Failed to fetch photographers data");
	}
	const photographers = await response.json();
	return { photographers };
}

async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");

	photographers.forEach((photographer) => {
		const photographerModel = photographerTemplate(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Fetch the photographers' data
	const { photographers } = await getPhotographers();
	// Access the photographers array from the photographers object
	displayData(photographers.photographers);
}

init();
