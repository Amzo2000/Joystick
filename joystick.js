// Function to draw a circle with a given position, radius, and color
function circle(pos, radius, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(pos.x, pos.y, radius, 0, Math.PI * 2); // Drawing a full circle
    context.fill();
    context.closePath();
}

// Joystick class to manage position, interaction, and rendering
class Joystick {
    constructor(x, y, radius, handleRadius) {
        this.pos = new Vector2(x, y); // Initial handle position
        this.origin = new Vector2(x, y); // Center of the joystick
        this.radius = radius; // Outer radius of the joystick
        this.handleRadius = handleRadius; // Radius of the handle (movable part)
        this.handleFriction = 0.25; // Friction for the handle to return to center
        this.ondrag = false; // Track if the joystick is being dragged
        this.touchPos = new Vector2(0, 0); // Track current touch/mouse position
        this.listener(); // Start event listeners
    }

    // Method to add event listeners for touch and mouse inputs
    listener() {
        // Touch Events
        addEventListener('touchstart', e => {
            this.touchPos = new Vector2(e.touches[0].pageX, e.touches[0].pageY); // Get touch position
            if (this.touchPos.sub(this.origin).mag() <= this.radius) this.ondrag = true; // Check if touch is inside the joystick
        });

        addEventListener('touchend', () => {
            this.ondrag = false; // Stop dragging on touch end
        });

        addEventListener('touchmove', e => {
            this.touchPos = new Vector2(e.touches[0].pageX, e.touches[0].pageY); // Update touch position on move
        });

        // Mouse Events
        addEventListener('mousedown', e => {
            this.touchPos = new Vector2(e.pageX, e.pageY); // Get mouse position
            if (this.touchPos.sub(this.origin).mag() <= this.radius) this.ondrag = true; // Check if click is inside the joystick
        });

        addEventListener('mouseup', () => {
            this.ondrag = false; // Stop dragging on mouse up
        });

        addEventListener('mousemove', e => {
            this.touchPos = new Vector2(e.pageX, e.pageY); // Update mouse position on move
        });
    }

    // Method to reposition the joystick handle
    reposition() {
        if (!this.ondrag) {
            // Gradually return the handle to the center if not dragging
            this.pos = this.pos.add(this.origin.sub(this.pos).mul(this.handleFriction));
        } else {
            // Limit the handle movement within the joystick radius
            const diff = this.touchPos.sub(this.origin);
            const maxDist = Math.min(diff.mag(), this.radius);
            this.pos = this.origin.add(diff.normalize().mul(maxDist));
        }
    }

    // Method to draw the joystick and its handle
    draw() {
        circle(this.origin, this.radius, '#707070'); // Draw the joystick base
        circle(this.pos, this.handleRadius, '#3d3d3d'); // Draw the joystick handle
    }

    // Update method to reposition and redraw the joystick
    update() {
        this.reposition();
        this.draw();    
    }
}
