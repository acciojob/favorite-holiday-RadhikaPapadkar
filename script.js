//your JS code here. If required.
// Create heading
const heading = document.createElement("h1");
heading.textContent = "Paris, France";

// Create line break
const lineBreak = document.createElement("br");

// Create paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "Paris, the capital of France, is often called the 'City of Light'. It is known for its romantic ambiance, cultural landmarks, and exquisite cuisine.";

// Create ordered list for attractions
const attractionsHeading = document.createElement("h2");
attractionsHeading.textContent = "Top 5 Attractions";

const orderedList = document.createElement("ol");
const attractions = [
    "The Eiffel Tower: An iconic symbol of Paris offering breathtaking views.",
    "The Louvre Museum: Home to the famous Mona Lisa.",
    "Notre-Dame Cathedral: A masterpiece of French Gothic architecture.",
    "Montmartre: Known for its bohemian charm and the Sacré-Cœur Basilica.",
    "The Champs-Élysées: A bustling avenue with shops and cafés."
];

attractions.forEach((attraction, index) => {
    const listItem = document.createElement("li");
    const emphasis = document.createElement(index % 2 === 0 ? "strong" : "em");
    emphasis.textContent = attraction;
    listItem.appendChild(emphasis);
    orderedList.appendChild(listItem);
});

// Create unordered list for foods
const foodsHeading = document.createElement("h2");
foodsHeading.textContent = "Must-Try Foods";

const unorderedList = document.createElement("ul");
const foods = [
    "Croissants: Buttery and flaky pastries perfect for breakfast.",
    "Escargot: Snails cooked in garlic and parsley butter.",
    "Macarons: Delicate almond meringue cookies with fillings.",
    "Crème Brûlée: A creamy dessert with a caramelized sugar topping.",
    "French Cheese: A wide variety including Brie and Roquefort."
];

foods.forEach((food, index) => {
    const listItem = document.createElement("li");
    const emphasis = document.createElement(index % 2 === 0 ? "strong" : "em");
    emphasis.textContent = food;
    listItem.appendChild(emphasis);
    unorderedList.appendChild(listItem);
});

// Append elements to the body
document.body.appendChild(heading);
document.body.appendChild(lineBreak);
document.body.appendChild(paragraph);
document.body.appendChild(attractionsHeading);
document.body.appendChild(orderedList);
document.body.appendChild(foodsHeading);
document.body.appendChild(unorderedList);