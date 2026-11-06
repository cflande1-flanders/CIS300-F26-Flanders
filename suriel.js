// THEORY OR COMMENT ROUTE

const routeChoices = document.querySelectorAll('input[name="surielRoute"]');
const theoryForm = document.getElementById("theory-form");
const commentForm = document.getElementById("comment-form");

routeChoices.forEach(function(choice) {
    choice.addEventListener("change", function() {

        if (this.value === "theory") {
            theoryForm.style.display = "block";
            commentForm.style.display = "none";
        }

        if (this.value === "comment") {
            commentForm.style.display = "block";
            theoryForm.style.display = "none";
        }
    });
});


// BOOK LISTS

const books = {
    acotar: [
        "A Court of Thorns and Roses",
        "A Court of Mist and Fury",
        "A Court of Wings and Ruin",
        "A Court of Frost and Starlight",
        "A Court of Silver Flames",
        "A Court of Splintered Harmony"
    ],

    tog: [
        "The Assassin's Blade",
        "Throne of Glass",
        "Crown of Midnight",
        "Heir of Fire",
        "Queen of Shadows",
        "Empire of Storms",
        "Tower of Dawn",
        "Kingdom of Ash"
    ],

    cc: [
        "House of Earth and Blood",
        "House of Sky and Breath",
        "House of Flame and Shadow"
    ]
};


// FUNCTION FOR SERIES -> BOOK DROPDOWNS

function updateBookDropdown(seriesDropdown, bookDropdown) {

    bookDropdown.innerHTML = '<option value="">Select a book</option>';

    const selectedSeries = seriesDropdown.value;

    if (books[selectedSeries]) {
        books[selectedSeries].forEach(function(book) {

            const option = document.createElement("option");
            option.value = book;
            option.textContent = book;

            bookDropdown.appendChild(option);
        });
    }
}


// BOOK 1

const series1 = document.getElementById("series1");
const book1 = document.getElementById("book1");

series1.addEventListener("change", function() {
    updateBookDropdown(series1, book1);
});


// MULTIPLE BOOKS

const multipleBooks = document.getElementById("multipleBooks");
const additionalBooks = document.getElementById("additional-books");

multipleBooks.addEventListener("change", function() {

    if (this.checked) {
        additionalBooks.style.display = "flex";
    } else {
        additionalBooks.style.display = "none";
    }
});


// BOOK 2 AND BOOK 3

const series2 = document.getElementById("series2");
const book2 = document.getElementById("book2");

const series3 = document.getElementById("series3");
const book3 = document.getElementById("book3");

series2.addEventListener("change", function() {
    updateBookDropdown(series2, book2);
});

series3.addEventListener("change", function() {
    updateBookDropdown(series3, book3);
});


// EXISTING THEORIES BY PAGE

const theories = {
    main: [
        "Is The Valkyrie Cycle SJM's Ring Cycle?"
    ],

    wyrdnet: [
        "What if 15,000 Years Doesn't Mean 15,000 Years Everywhere?"
    ],

    prythian: [
        "Is Nesta Being Called Back to the Dusk Court?"
    ],

    unmaasking: [
        "The Nameless Theory"
    ]
};


// PAGE -> THEORY DROPDOWN

const theoryPage = document.getElementById("theoryPage");
const theoryDiscussed = document.getElementById("theoryDiscussed");

theoryPage.addEventListener("change", function() {

    theoryDiscussed.innerHTML = '<option value="">Select a theory</option>';

    const selectedPage = theoryPage.value;

    if (theories[selectedPage]) {
        theories[selectedPage].forEach(function(theory) {

            const option = document.createElement("option");
            option.value = theory;
            option.textContent = theory;

            theoryDiscussed.appendChild(option);
        });
    }
});


// SUBMISSION CONFIRMATIONS

const theorySubmissionForm = document.getElementById("theorySubmissionForm");
const commentSubmissionForm = document.getElementById("commentSubmissionForm");
const surielContent = document.getElementById("suriel-content");

theorySubmissionForm.addEventListener("submit", function(event) {
    event.preventDefault();

    surielContent.innerHTML = `
        <h2>The Suriel has heard you.</h2>
        <p>Your theory has been submitted to the Library.</p>
    `;
});

commentSubmissionForm.addEventListener("submit", function(event) {
    event.preventDefault();

    surielContent.innerHTML = `
        <h2>Your message has reached The Suriel.</h2>
        <p>Thank you for adding to the conversation. Comments are reviewed before appearing in the Library.</p>
    `;
});