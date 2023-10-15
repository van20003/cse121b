/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templesData = [];

/* async displayTemples Function */
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

/* async getTemples Function using fetch()*/
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

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ""; 
    templesData = []; // Clear data
};

/* sortBy Function */
const sortBy = (property) => {
    templesData.sort((a, b) => a[property].localeCompare(b[property]));
    displayTemples(templesData);
};
getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    const selectedValue = document.querySelector("#sortBy").value;
    sortBy(selectedValue);
});
