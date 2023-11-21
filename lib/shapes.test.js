// Import the Circle, Triangle, and Square classes from the 'shapes' module
const { Circle, Triangle, Square } = require('./shapes');

// Describe a test suite for the shape classes
describe('Shape classes', () => {
    // Describe a test suite specifically for the Circle class
    describe('Circle', () => {
        // Define a test case for rendering a circle
        it('should render a circle SVG string', () => {
            // Create a new instance of Circle with the color 'blue'
            const circle = new Circle('blue');

            // Expect the 'render' method of the circle instance to produce a specific SVG string
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });

    // Describe a test suite specifically for the Triangle class
    describe('Triangle', () => {
        // Define a test case for rendering a triangle
        it('should render a triangle SVG string', () => {
            // Create a new instance of Triangle with the color 'red'
            const triangle = new Triangle('red');

            // Expect the 'render' method of the triangle instance to produce a specific SVG string
            expect(triangle.render()).toEqual('<polygon points="150,20 250,180 50,180" fill="red" />');
        });
    });

    // Describe a test suite specifically for the Square class
    describe('Square', () => {
        // Define a test case for rendering a square
        it('should render a square SVG string', () => {
            // Create a new instance of Square with the color 'green'
            const square = new Square('green');

            // Expect the 'render' method of the square instance to produce a specific SVG string
            expect(square.render()).toEqual('<rect x="70" y="50" width="160" height="160" fill="green" />');
        });
    });
});
