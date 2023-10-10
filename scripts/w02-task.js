/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "James Vang";
let currentYear = "2023";
let profilePicture = 'images/Me.jpg';

/* Step 3 - Element Variables */
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");


/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>${fullName}</strong>";

yearElement.textContent = currentYear;

const imageElement = document.getElementById("profile-image");
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profile image of ${fullName}");



/* Step 5 - Array */

// Declare an array variable to hold your favorite foods
const favoriteFoods = ['Burgers', 'Steak'];

// Modify the HTML element with the id of food to display your favorite foods array
foodElement.innerHTML = favoriteFoods.join('<br>');

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = 'Burgers';

// Add the value stored in this new variable to your favorite food array
favoriteFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food
foodElement.innerHTML += `<br>${newFavoriteFood}`;

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Append the array output showing the modified array, using a line break
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array using a line break
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;





