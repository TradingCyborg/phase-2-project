Random Quote Generator
The Random Quote Generator is a web application that allows users to generate and view random quotes from a collection of quotes by various authors. Users can also view all available quotes, add new quotes to the collection, and see detailed information about a specific quote.

Features
Random Quote: The homepage displays a random quote with its author.
All Quotes: Users can view a list of all available quotes along with their authors.
Add Quote: Users can add new quotes to the collection with a text and author.
Single Quote View: Clicking on a specific quote in the "All Quotes" section navigates to a page displaying the details of that quote.
Getting Started
Follow these instructions to get the project up and running on your local machine.

Prerequisites
You need to have the following software installed on your system:

Node.js
npm
json-server
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/random-quote-generator.git
Change to the project directory:

bash
Copy code
cd phase-2-project
Install the project dependencies:

bash
Copy code
npm install
Setting Up the JSON Server
Create a db.json file in the project's root directory and add quotes with authors as shown in the provided example db.json file.

Start the JSON server:

bash
Copy code
json-server --watch db.json --port 5000
Running the Application
Start the React application:

bash
Copy code
npm start
The application should open in your default web browser at http://localhost:3000.

Usage
Visit the homepage to see a random quote.
Navigate to the "All Quotes" page to view all quotes and their authors.
To add a new quote, go to the "Add Quote" page and submit the quote text and author.
Click on a specific quote in the "All Quotes" section to view its details on the "Single Quote" page.
Built With
React - JavaScript library for building user interfaces.
React Router - Routing for single-page applications.
axios - Promise-based HTTP client for making requests to the JSON server.
json-server - Fake REST API server for development and testing.
Contributing
Contributions are welcome. Feel free to open issues and pull requests to improve this project.

License
This project is open-source and available under the MIT License.

Acknowledgments
Quote data in the provided db.json is for demonstration purposes and can be replaced with real quotes.
Feel free to customize this README to include additional details about your project, such as deployment instructions, testing procedures, or any other relevant information. Make sure to replace placeholders like yourusername with your actual GitHub username, and add any additional information specific to your project.