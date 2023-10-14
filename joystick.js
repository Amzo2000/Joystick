function circle(pos, radius, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();
}

class Joystick {
    constructor(x, y, radius, handleRadius) {
        this.pos = new Vector2(x, y);
        this.origin = new Vector2(x, y);
        this.radius = radius;
        this.handleRadius = handleRadius;
        this.handleFriction = 0.25;
        this.ondrag = false;
        this.touchPos = new Vector2(0, 0);
        this.listener();
    }
    listener() {
	// Touch Events
        addEventListener('touchstart', e => {
            this.touchPos = new Vector2(e.touches[0].pageX, e.touches[0].pageY);
            if (this.touchPos.sub(this.origin).mag() <= this.radius) this.ondrag = true;
        });
        addEventListener('touchend', () => {
            this.ondrag = false;
        });
        addEventListener('touchmove', e => {
            this.touchPos = new Vector2(e.touches[0].pageX, e.touches[0].pageY);
        });
	// Mouse Events
	addEventListener('mousedown', e => {
            this.touchPos = new Vector2(e.pageX, e.pageY);
            if (this.touchPos.sub(this.origin).mag() <= this.radius) this.ondrag = true;
        });
        addEventListener('mouseup', () => {
            this.ondrag = false;
        });
        addEventListener('mousemove', e => {
            this.touchPos = new Vector2(e.pageX, e.pageY);
        });
    }
    reposition() {
        if (this.ondrag == false) {
            this.pos = this.pos.add(this.origin.sub(this.pos).mul(this.handleFriction));
        } else {
            const diff = this.touchPos.sub(this.origin);
            const maxDist = Math.min(diff.mag(), this.radius);
            this.pos = this.origin.add(diff.normalize().mul(maxDist));
        }
    }
    draw() {
        // Draw Joystick
        circle(this.origin, this.radius, '#707070');
        // Draw Handle
        circle(this.pos, this.handleRadius, '#3d3d3d');
    }
    update() {
        this.reposition();
        this.draw();    
    }
}