// Replace '[Name]' with the birthday celebrant's name dynamically
const celebrantName = "Colleen";  // Change this to the celebrant's name
document.getElementById('name').textContent = celebrantName;

// Function to generate random balloons
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.backgroundColor = getRandomColor(); // Random balloon color
    balloon.style.left = Math.random() * 100 + 'vw';  // Random position
    balloon.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random float speed

    document.getElementById('balloon-container').appendChild(balloon);

    // Remove the balloon once it's out of view
    setTimeout(() => {
        balloon.remove();
    }, 7000); // Match the float duration
}

// Function to generate random colors for balloons
function getRandomColor() {
    const colors = ['#ff69b4', '#87CEEB', '#FF6347', '#FFD700', '#32CD32'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Create a balloon every 500ms
setInterval(createBalloon, 500);
