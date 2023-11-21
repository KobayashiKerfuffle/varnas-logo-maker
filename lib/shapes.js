// Define a base class called 'Shape'
class Shape {
    // Constructor for the Shape class, taking 'color' as an argument
    constructor(color) {
        this.color = color; // Set the color property of the shape
    }
}

// Define a class called 'Circle' that extends the 'Shape' class
class Circle extends Shape {
    // Method to render the SVG representation of the Circle
    render() {
        // Return the SVG string for a circle, using 'this.color' for its fill color
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Define a class called 'Triangle' that also extends the 'Shape' class
class Triangle extends Shape {
    // Method to render the SVG representation of the Triangle
    render() {
        // Return the SVG string for a triangle, using 'this.color' for its fill color
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
    }
}

// Define a class called 'Square' that extends the 'Shape' class
class Square extends Shape {
    // Method to render the SVG representation of the Square
    render() {
        // Return the SVG string for a square, using 'this.color' for its fill color
        return `<rect x="70" y="50" width="160" height="160" fill="${this.color}" />`;
    }
}

// Export the Circle, Triangle, and Square classes
// This makes them available for import in other JavaScript files
module.exports = { Circle, Triangle, Square };
