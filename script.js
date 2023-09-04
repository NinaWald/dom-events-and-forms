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
// These lines reference to the HTML element ids

const fruitImages = {
    apple: "apple.png",
    banana: "banana.png",
    cherry: "cherries.png",
    orange: "orange.png",
    order: "thumb.png"
};
/*
This block defines an object called fruitImages that maps fruit names
 (e.g., "apple") to image file names (e.g., "apple.png").
 It also includes an entry for "order" to represent the thumb-image used when placing an order.
*/

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

        // Add a console.log to show the selected fruit
        console.log(`Selected fruit: ${selectedFruit}`);
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
})

resetButton.addEventListener("click", () => {
    // Reset the imageContainer to its initial state
    imageContainer.src = "images/white.png";
    imageContainer.alt = "fruit";

    // Reset the dropdown to its initial state
    fruitDropdown.value = "";
});