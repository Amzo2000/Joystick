// Class to handle 2D vector operations
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Add two vectors
    add(vector) {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }

    // Subtract two vectors
    sub(vector) {
        return new Vector2(this.x - vector.x, this.y - vector.y);
    }

    // Multiply vector by a scalar
    mul(n) {
        return new Vector2(this.x * n, this.y * n);
    }

    // Divide vector by a scalar
    div(n) {
        return new Vector2(this.x / n, this.y / n);
    }

    // Calculate the magnitude (length) of the vector
    mag() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    // Normalize the vector (make its magnitude 1)
    normalize() {
        return this.mag() === 0 ? new Vector2(0, 0) : this.div(this.mag());
    }
}
