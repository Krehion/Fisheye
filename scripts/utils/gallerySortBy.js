// style : on click on "titre", "popularité" or "date", display the correct word in #current_filter + change elements order in .dropdown_content list so that current filter is 1st 

// (to be done at the end) keyboard navigation : make .btn_drop unfocusable + display .dropdown_content on top of it when focused

function sortByPop(medias) { // diviser en 3 fonctions
    const btnSortPop = document.querySelector(".sort-by-pop");
    btnSortPop.addEventListener("click", function() {
        const mediaOrdered = Array.from(medias);
        mediaOrdered.sort(function (a, b) {
            return a.likes - b.likes;
        });
        console.log (mediaOrdered);
    })
}

function sortByDate() {
    const btnSortDate = document.querySelector(".sort-by-date");
    btnSortDate.addEventListener("click", function() {
        // ...
    })
}

function sortByTitle() {
    const btnSortTitle = document.querySelector(".sort-by-title");
        btnSortTitle.addEventListener("click", function() {
            // ...
        })
}
    