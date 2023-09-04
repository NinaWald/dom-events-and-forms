const fruitDropdown = document.getElementById("fruitDropdown");
const button = document.getElementById("button");
const imageContainer = document.getElementById("imageContainer");

const fruitImages = {
    apple: "apple.png",
    banana: "banana.png",
    cherry: "cherries.png",
    orange: "orange.png"
};

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
