// Array of learners
const learners = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Function to generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { color: `rgb(${r}, ${g}, ${b})`, brightness: (r * 0.299 + g * 0.587 + b * 0.114) };
}

// Function to shuffle array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Select the article element
const article = document.querySelector("article");

// Shuffle learners array so order changes on each page load
shuffleArray(learners);

// Loop through the learners and create sections
learners.forEach(name => {
    const { color, brightness } = getRandomColor();

    // Create section element
    const section = document.createElement("section");
    section.style.backgroundColor = color;
    section.style.color = brightness < 128 ? "white" : "black"; // Adjust text color

    // Create paragraph with learner's name
    const paragraph = document.createElement("p");
    paragraph.textContent = name;

    // Append paragraph to section
    section.appendChild(paragraph);

    // Append section to article
    article.appendChild(section);
});
