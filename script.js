/*
In this top section, I am using the const keyword to declare and assign values
 to variables that represent various HTML elements by their IDs.
  This makes it clear which elements you're working with in your code,
 and it's a good practice for maintaining code structure and organization.
*/

const fruitDropdown = document.getElementById("fruitDropdown");
const button = document.getElementById("button");
const imageContainer = document.getElementById("imageContainer");
const orderButton = document.getElementById("orderButton");
const resetButton = document.getElementById("resetButton");
const randomButton = document.getElementById("random-button");
// These lines reference to the HTML element ids

const fruitCounts = {
    apple: 0,
    banana: 0,
    cherry: 0,
    orange: 0
};

const fruitCountDisplay = {
    apple: document.getElementById("appleCount"),
    banana: document.getElementById("bananaCount"),
    cherry: document.getElementById("cherryCount"),
    orange: document.getElementById("orangeCount")
};


/*
This block below defines an object called fruitImages that maps fruit names
to image file names (e.g., "apple.png").
 It also includes an entry for "order" to represent the thumbs-up image
used when placing an order.
*/
const fruitImages = {
    apple: "apple.png",
    banana: "banana.png",
    cherry: "cherries.png",
    orange: "orange.png",
    order: "thumb.png"
};

/*
This line below adds a click event listener to the button element.
 When the button is clicked,
 the function inside the parentheses (an arrow function) is executed.
*/
button.addEventListener("click", () => {
    const selectedFruit = fruitDropdown.value.toLowerCase();

    if (selectedFruit in fruitImages) {
        // Set the src and alt attributes of the existing imageContainer
        imageContainer.src = `images/${fruitImages[selectedFruit]}`;
        imageContainer.alt = selectedFruit;

    // Change background color based on the selected fruit
    if (selectedFruit === "apple") {
        imageContainer.style.backgroundColor = "green";

    }    else if (selectedFruit === "banana") {
        imageContainer.style.backgroundColor = "yellow";

    }   else if (selectedFruit === "cherry") {
        imageContainer.style.backgroundColor = "red";

    }   else if (selectedFruit === "orange") {
        imageContainer.style.backgroundColor = "orange";
    }
        // Increment and display the fruit count
        fruitCounts[selectedFruit]++;
    // Update the content of the corresponding fruit count display element
    fruitCountDisplay[selectedFruit].textContent = fruitCounts[selectedFruit];
    } else {
        imageContainer.src = ""; // Clear the image
        imageContainer.alt = "Selected Fruit Image"; // Reset the alt attribute
        imageContainer.style.backgroundColor = "white";
    }
});
/*
This line below adds a click event listener to the orderButton element.
 When the "order fruit" button is clicked,
 the function inside the parentheses (an arrow function) is executed.
 When the "order fruit" button is clicked,
  this line sets the src attribute of the imageContainer to display the order image(thumb),
  indicating that an order is being processed.
*/
orderButton.addEventListener("click", () => {
    imageContainer.src = `images/${fruitImages.order}`;
    imageContainer.alt = "Order";
    imageContainer.style.backgroundColor = "white";
})


// An array of fruit names for the random selector
const fruits = [
    "apple",
    "banana",
    "cherry",
    "orange"
    ];

randomButton.addEventListener("click", () => {
    // Generate a random index within the range of the fruits array
    const randomIndex = Math.floor(Math.random() * fruits.length);
    
    // Get the random fruit name using the random index
    const randomFruit = fruits[randomIndex];

    // Set the src and alt attributes of the imageContainer to display the random fruit image
    imageContainer.src = `images/${fruitImages[randomFruit]}`;
    imageContainer.alt = randomFruit;
    imageContainer.style.backgroundColor = "white";

    // Add a console.log to show the selected random fruit
    console.log(`Randomly selected fruit: ${randomFruit}`);
});

resetButton.addEventListener("click", () => {
    // Reset the imageContainer to its initial state
    imageContainer.src = "images/white.png";
    imageContainer.alt = "fruit";
    imageContainer.style.backgroundColor = "white";

    // Reset the dropdown to its initial state
    fruitDropdown.value = "";

      // Clear the fruit counts
      for (const fruit in fruitCounts) {
        fruitCounts[fruit] = 0;
        fruitCountDisplay[fruit].textContent = "0";
    }
});