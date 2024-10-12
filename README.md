# Joystick Interaction Project

This project implements a virtual joystick system using HTML5 Canvas and JavaScript. The user can interact with the joysticks either through touch events (on mobile devices) or mouse events (on desktop). The application renders two joysticks on a canvas and updates their position in real-time as the user drags them.

## Features
- Touch and mouse input support.
- Smooth joystick movement with friction when released.
- Two virtual joysticks displayed on-screen.
- Responsive design: the canvas adjusts to the screen size.

## Getting Started

### Prerequisites
You will need a web browser that supports HTML5 and JavaScript. No additional libraries are required.

### Installation

1. Clone the repository or download the source files.

```bash
git clone https://github.com/Amzo2000/Joystick.git
```

2. Navigate to the project directory.

```bash
cd Joystick
```

3. Open the `index.html` file in your web browser.

```bash
open index.html
```

Alternatively, you can host the files on a local server for better performance.

### Project Structure

```bash
.
├── index.html        # Main HTML file
├── joystick.js       # Joystick class and interaction logic
├── main.js           # Main script to initialize and update joysticks
├── vector.js         # 2D vector operations
└── style.css         # CSS for styling the canvas
```

## Usage

Once the `index.html` file is opened in a browser, you will see two joysticks on the screen:

- The left joystick is located at the bottom left corner.
- The right joystick is located at the bottom right corner.

You can click and drag each joystick's handle, or use touch controls on mobile devices, to move it around. When released, the handle smoothly returns to its center position.

## Customization

You can modify the joystick's position, radius, and handle size by editing the following lines in `main.js`:

```javascript
let joysticks = [
    new Joystick(80, height - 80, 50, 25), // Left joystick
    new Joystick(width - 80, height - 80, 50, 25) // Right joystick
];
```

- **Joystick parameters:**
  - `x` and `y` are the initial positions.
  - The first number (`50`) is the joystick base radius.
  - The second number (`25`) is the joystick handle radius.

## License

This project is open source.
