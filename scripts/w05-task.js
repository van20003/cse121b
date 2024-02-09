/* W05: Programming Tasks */

// Declare and initialize global variables
const templesElement = document.querySelector("#temples");
let templesData = [];

// async displayTemples Function
const displayTemples = (temples) => {
    templesElement.innerHTML = "";
    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

// async getTemples Function using fetch()
const getTemples = async () => {
    try {
        const response = await fetch(
            "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
        );
        const data = await response.json();
        templesData = data;
        displayTemples(templesData);
    } catch (error) {
        console.error("Error fetching temple data: ", error);
    }
};

// reset Function
const reset = () => {
    templesElement.innerHTML = "";
    templesData = []; // Clear data
};

// sortBy Function
const sortBy = (property) => {
    templesData.sort((a, b) => a[property].localeCompare(b[property]));
    displayTemples(templesData);
};

getTemples();

// Event Listener
document.querySelector("#sortBy").addEventListener("change", () => {
    const selectedValue = document.querySelector("#sortBy").value;
    sortBy(selectedValue);
});

// Function expression named filterTemples
const filterTemples = function (temples) {
    // Call reset function to clear the output
    reset();

    // Define a variable named filter that obtains the value of the HTML element with the ID of filtered
    const filter = document.getElementById("sortBy").value;

    // Use a switch statement that uses the filter value as the selector responding to four cases
    switch (filter) {
        case "utah":
            // Call displayTemples function with a filter statement for temples in Utah
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            // Call displayTemples function with a filter statement for temples outside of Utah
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            // Call displayTemples function with a filter statement for temples built before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case "all":
            // Call displayTemples function with no filter, using temples as the argument
            displayTemples(temples);
            break;
        default:
            // Handle any other cases
            console.error("Invalid filter option");
    }
};
