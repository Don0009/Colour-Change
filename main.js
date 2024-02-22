const divs = document.querySelectorAll(".color"); // Select all elements with class "color"
const body = document.querySelector("body");

divs.forEach(function(div) {
    div.addEventListener('click', function(e) {
        const color = e.target.id; // Get the ID of the clicked element
        
        // Check which color was clicked and set the body background color accordingly
        if (color === 'Yellow' || color === 'Red' || color === 'Crimson' || color === 'Blue' || color === 'Voilet') {
            body.style.backgroundColor = color;
        }
    });
});
