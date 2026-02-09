// 1. Change greeting message
const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name.trim() !== "") {
        greeting.textContent = `Hello, ${name}`; // Update to "Hello, [name]"
    } else {
        greeting.textContent = "Hello";
    }
});

// 2. Change background color of boxes on click
const boxes = document.querySelectorAll('.color-box');

boxes.forEach(box => {
    box.addEventListener('click', function() {
        // Get the color name from the text inside the box
        const color = this.textContent.toLowerCase();
        
        // Use DOM to fill color in the box
        this.style.backgroundColor = color;
        
        // Adjust text color for readability (except for yellow)
        if (color === 'yellow') {
            this.style.color = 'black';
        } else {
            this.style.color = 'white';
        }
    });
});