// Create a canvas element and get its 2D drawing context
const canvas = document.createElement('canvas'), context = canvas.getContext('2d');
document.body.append(canvas);

let width = canvas.width = innerWidth; // Set canvas width to window width
let height = canvas.height = innerHeight; // Set canvas height to window height

const FPS = 120; // Frames per second

// Function to clear the background
function background() {
    context.fillStyle = '#000'; // Set background color to black
    context.fillRect(0, 0, width, height); // Fill the entire canvas
}

// Create two joysticks, one on the left and one on the right
let joysticks = [
    new Joystick(80, height - 80, 50, 25), // Left joystick
    new Joystick(width - 80, height - 80, 50, 25) // Right joystick
];

// Main loop that updates and redraws the canvas at the specified FPS
setInterval(() => {
    background(); // Clear the screen

    for (let joystick of joysticks) {
        joystick.update(); // Update each joystick
    }

}, 1000 / FPS); // Update every frame
