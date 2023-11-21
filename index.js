// Import the 'fs' module to handle file system operations like writing files
const fs = require('fs');

// Import the shape classes from the 'shapes' module
const { Circle, Triangle, Square } = require('./lib/shapes');

// Define an asynchronous function to prompt the user for input
async function promptUser(inquirer) {
    // Use the 'inquirer' module to ask questions and wait for user responses
    const answers = await inquirer.prompt([
        {
            type: 'input', // Type of question - text input
            name: 'text', // Key to associate with the answer
            message: 'Enter up to three characters for the logo text:', // Prompt message
            validate: input => input.length <= 3 // Validation to allow only up to 3 characters
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex):',
            default: 'black' // Default value if the user doesn't enter anything
        },
        {
            type: 'list', // Type of question - list to choose from
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square'] // Available choices
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex):',
            default: 'black'
        }
    ]);

    // Return the answers provided by the user
    return answers;
}

// Define a function to create an SVG string based on user input
function createSvg({ text, textColor, shape, shapeColor }) {
    let shapeObject;

    // Determine which shape to create based on user input
    switch (shape) {
        case 'Circle':
            shapeObject = new Circle(shapeColor); // Create a new Circle object
            break;
        case 'Triangle':
            shapeObject = new Triangle(shapeColor); // Create a new Triangle object
            break;
        case 'Square':
            shapeObject = new Square(shapeColor); // Create a new Square object
            break;
    }

    // Construct and return the SVG string using the shape and text details
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeObject.render()}
        <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40" font-family="Arial">${text}</text>
    </svg>`;
}

// Define an asynchronous main function to execute the application logic
async function main() {
    try {
        // Dynamically import the 'inquirer' module and use its default export
        const inquirer = await import('inquirer').then(module => module.default);

        // Prompt the user for input and wait for the responses
        const userInput = await promptUser(inquirer);

        // Generate the SVG content based on user input
        const svgContent = createSvg(userInput);

        // Write the SVG content to a file named 'logo.svg' in the 'examples' directory
        fs.writeFileSync('examples/logo.svg', svgContent);

        // Log a success message to the console
        console.log('Generated logo.svg');
    } catch (error) {
        // Log any errors that occur during execution
        console.error('Error generating SVG:', error);
    }
}

// Execute the main function
main();
