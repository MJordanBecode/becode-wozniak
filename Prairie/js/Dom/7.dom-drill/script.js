// Get the <ul> element
const ul = document.querySelector("ul");

// List all child nodes
console.log(ul.childNodes);

// Loop through child nodes, only keeping element nodes
const items = [...ul.children];
items.forEach((item) => {
  if (item.nodeType === 1) {
    // Check if item contains "Fast and Furious"
    if (item.textContent.includes("Fast and Furious")) {
      item.classList.add("important");
      ul.prepend(item); // Move to the top if not already first
    }
    
    // Add click event listener
    item.addEventListener("click", () => {
      if (item.textContent.includes("Fast and Furious")) {
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about cars, it's about family.");
      } else {
        alert(item.textContent);
      }
    });
  }
});

// Remove duplicates
const seen = new Set();
items.forEach((item) => {
  if (seen.has(item.textContent)) {
    ul.removeChild(item);
  } else {
    seen.add(item.textContent);
  }
});

// Shuffle function (except first item)
function shuffleList() {
  const itemsArray = [...ul.children].slice(1);
  for (let i = itemsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [itemsArray[i], itemsArray[j]] = [itemsArray[j], itemsArray[i]];
  }
  itemsArray.forEach((item) => ul.appendChild(item));
}

// Key event listeners
document.body.addEventListener("keyup", (event) => {
  if (event.key === "r") {
    shuffleList();
  } else if (event.key === "d") {
    const fastAndFurious = ul.querySelector(".important");
    if (fastAndFurious) {
      const clone = fastAndFurious.cloneNode(true);
      ul.appendChild(clone);
    }
  }
});

// Create a new div and insert before the list
const newDiv = document.createElement("div");
ul.parentNode.insertBefore(newDiv, ul);

// Create select dropdown
const select = document.createElement("select");
const option1 = document.createElement("option");
option1.value = "important";
option1.textContent = "Important franchises";
const option2 = document.createElement("option");
option2.value = "normal";
option2.textContent = "Normal franchises";
select.appendChild(option1);
select.appendChild(option2);
newDiv.appendChild(select);

// Filter list based on selection
select.addEventListener("change", (event) => {
  const isImportant = event.target.value === "important";
  items.forEach((item) => {
    if (isImportant) {
      item.style.visibility = item.classList.contains("important") ? "visible" : "hidden";
    } else {
      item.style.visibility = "visible";
    }
  });
});
