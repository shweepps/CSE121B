/* Lesson 4 */

/* DATA */
document.addEventListener('DOMContentLoaded', function(){

// Step 1: Declare a new variable to hold information about yourself
const aboutMe = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
aboutMe.name = "Moshoeshoe Simon Mopeli";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
aboutMe.photo = "images/moshoeshoe.jpg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
aboutMe.favourateFoods = ["Pizza", "Pap", "Chicken", "Sea Weed", "Beef"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
aboutMe.hobbies = ["reading", "traveling", "playing video games"];
// Step 6: Add another property named placesLived with a value of an empty array
aboutMe.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
aboutMe.placesLived.push({place: "", length: ""});
// Step 8: For each property, add appropriate values as strings
aboutMe.placesLived.push({ place: "Witbank", length: "5 years" });

// Step 9: Add additional objects with the same properties for each place you've lived
aboutMe.placesLived.push({ place: "Phuthadithaba", length: "17 years" });

const para = document.createElement("p");
para.innerHTML = "Paragraph created";
document.body.appendChild(para);

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = aboutMe.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const photo = document.querySelector("#photo");
photo.src = aboutMe.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.alt = aboutMe.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
aboutMe.favourateFoods.forEach((food) => {
    const li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
aboutMe.hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
  });
// Step 6: Repeat Step 4 for each hobby in the hobbies property
aboutMe.placesLived.forEach((place) => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;
    const dd = document.createElement("dd");
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
    
  });
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived


});