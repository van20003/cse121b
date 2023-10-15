document.addEventListener("DOMContentLoaded", function() {
    /* LESSON 4 - Programming Tasks */

   
    let myProfile = {};
    myProfile.name = "James Vang";
    myProfile.photo = "images/Me.jpg";
    myProfile.favoriteFoods = [
        "Pizza",
        "Burgers",
        "Steak",
        "Ramen"
    ];
    myProfile.hobbies = [
        "Sports",
        "Eating",
        "Youtube",
        "Cars",
        "Computers"
    ];
    myProfile.placesLived = [
    { place: 'Sacramento, CA', length: '26 years' },
    { place: 'Rexburg, ID', length: '4 years' }
    ];

    /* DOM Manipulation - Output */

    
    document.querySelector("#name").textContent = myProfile.name;

   
    document.querySelector("#photo").src = myProfile.photo;

   
    const favoriteFoodsList = document.querySelector("#favorite-foods");
    myProfile.favoriteFoods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
    });

  
    const hobbiesList = document.querySelector("#hobbies");
    myProfile.hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
    });

   
    const placesLivedList = document.querySelector("#places-lived");
    myProfile.placesLived.forEach(place => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;
    const dd = document.createElement("dd");
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
    });
});
