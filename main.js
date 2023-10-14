const canvas = document.createElement('canvas'), context = canvas.getContext('2d');
document.body.append(canvas);

let width = canvas.width = innerWidth;
let height = canvas.height = innerHeight;

const FPS = 120;

function background() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);
}

let joysticks = [
    new Joystick(80, height - 80, 50, 25),
    new Joystick(width - 80, height - 80, 50, 25)
];



setInterval(() => {
    background();

    for (let joystick of joysticks) {
        joystick.update();
    }

    

}, 1000 / FPS);