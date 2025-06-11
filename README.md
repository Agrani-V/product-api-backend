This is a simple RESTful backend API for managing products built using Node.js, Express, and MongoDB.

Technologies Used:
Node.js

Express.js

MongoDB (with Mongoose)

dotenv (for environment variable management)

Postman (for testing)



Features:
Add a new product

Get all products

Get a product by ID

Update a product by ID

Delete a product by ID

Validation and meaningful responses included



API Endpoints Overview:
POST /products – Add a new product (needs name, price, and quantity).

GET /products – Fetch all products in the database.

GET /products/:id – Get a specific product by its ID.

PUT /products/:id – Update a product by ID (you can update any field).

DELETE /products/:id – Remove a product from the database by ID.



Notes:
No authentication is used (as per the assignment).

All routes are tested using Postman.

Validation and helpful success/error messages are added



How to Run:
Clone the project

Run npm install

Create a .env file with:
    MONGO_URL=your_mongo_connection_string
    PORT=3000

Start the project:
    npm start