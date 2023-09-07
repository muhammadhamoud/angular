import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import { Product, Category } from './models'
import { User } from './models'

import { Customer } from './models'; // Import the Customer model


const path = require('path');
// console.log(path.join(__dirname, 'db.json'))
const dbFilePath = 'C:/Backup/ng/frontend/server/db.json'; 


const app = express();
// Use the cors middleware
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

// // Enable CORS with credentials
// app.use(cors({ credentials: true }));


const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Simulate a json-server database
const DB_FILE_PATH = dbFilePath;
const db = JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf8'));

// ... Existing user registration and login routes ...
// -------------------------------------------------------
// Register new user
app.post('/register', (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userExists = db.users.some((user: User) => user.email === email);

  if (userExists) {
    res.status(400).json({ message: 'User already exists.' });
  } else {
    const newUser: User = {
      id: uuidv4(),
      email,
      password,
    };
    db.users.push(newUser);
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2));
    res.status(201).json({ message: 'User registered successfully.' });
  }
});

// Login user
app.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = db.users.find(
    (user: User) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ message: 'Login successful.' });
  } else {
    res.status(401).json({ message: 'Invalid credentials.' });
  }
});

// JSON Server
app.use('/api', (req, res) => {
  // Use the json-server router here if needed
  res.send('JSON Server route');
});

// -------------------------------------------------------
// CRUD operations for category
// -------------------------------------------------------
// Get all products
app.get('/products', (req: Request, res: Response) => {
  const products: Product[] = db.products;
  res.status(200).json(products);
});

// Get a single product by ID
app.get('/products/:id', (req: Request, res: Response) => {
  const productId = req.params.id;
  const product: Product | undefined = db.products.find(p => p.id === productId);
  
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found.' });
  }
});

// Create a new product
app.post('/products', (req: Request, res: Response) => {
  const newProduct: Product = {
    id: uuidv4(),
    ...req.body
  };
  db.products.push(newProduct);
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2));
  res.status(201).json(newProduct);
});

// Update a product
app.put('/products/:id', (req: Request, res: Response) => {
  const productId = req.params.id;
  const productIndex = db.products.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    db.products[productIndex] = {
      ...db.products[productIndex],
      ...req.body
    };
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2));
    res.status(200).json(db.products[productIndex]);
  } else {
    res.status(404).json({ message: 'Product not found.' });
  }
});

// Delete a product
app.delete('/products/:id', (req: Request, res: Response) => {
  const productId = req.params.id;
  const productIndex = db.products.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    const deletedProduct = db.products.splice(productIndex, 1);
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2));
    res.status(200).json(deletedProduct[0]);
  } else {
    res.status(404).json({ message: 'Product not found.' });
  }
});

// -------------------------------------------------------
// Get all Categories
// -------------------------------------------------------
// Get all products
app.get('/category', (req: Request, res: Response) => {
  const category: Category[] = db.category;
  res.status(200).json(category);
});

// Get a single product by ID
app.get('/category/:id', (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const category: Category | undefined = db.category.find(p => p.id === categoryId);
  
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).json({ message: 'category not found.' });
  }
});

// Create a new product
app.post('/category', (req: Request, res: Response) => {
  const newCategory: Category = {
    id: uuidv4(),
    ...req.body
  };
  db.category.push(newCategory);
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2));
  res.status(201).json(newCategory);
});

// Update a product
app.put('/category/:id', (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const categoryIndex = db.category.findIndex(p => p.id === categoryId);

  if (categoryIndex !== -1) {
    db.category[categoryIndex] = {
      ...db.category[categoryIndex],
      ...req.body
    };
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2));
    res.status(200).json(db.category[categoryIndex]);
  } else {
    res.status(404).json({ message: 'category not found.' });
  }
});

// Delete a category
app.delete('/category/:id', (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const categoryIndex = db.category.findIndex(p => p.id === categoryId);

  if (categoryIndex !== -1) {
    const deletedCategory = db.category.splice(categoryIndex, 1);
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2));
    res.status(200).json(deletedCategory[0]);
  } else {
    res.status(404).json({ message: 'category not found.' });
  }
});


// Create a route for OAuth token requests
app.post('/oauth/token', (req, res) => {
  // Handle OAuth token generation and authentication here
  // You'll need to implement this logic

  res.status(200).json({ message: 'Customer is logged in' });
});


// Define routes
app.get('/session/customer/status', (req, res) => {
  // Implement your logic to handle the GET request to /session/customer/status
  // You can send a JSON response as needed
  res.status(200).json({ message: 'Customer is logged in' });
});

app.get('/session/destroy', (req, res) => {
  // Implement your logic to handle the GET request to /session/destroy
  // You can send a JSON response as needed
  res.status(200).json({ message: 'Session destroyed' });
});




// Create a new customer
app.post('/api/customers', (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;

  // Validate and handle the request, and add the new customer to your database
  // Ensure proper error handling and response
  // Example:
  const newCustomer: Customer = {
    id: uuidv4(),
    email,
    password,
    firstName,
    lastName,
  };

  db.customers.push(newCustomer);
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2));

  res.status(201).json(newCustomer);
});

// // Get the current customer
// app.get('/api/customers/current', (req: Request, res: Response) => {
//   // Handle the request to get the current customer
//   // Example:
//   // const currentCustomer = '' /* Logic to fetch the current customer from your database */;
//   // res.status(200).json(currentCustomer);
// });

// Get customer by ID
app.get('/api/customers/:id', (req: Request, res: Response) => {
  const customerId = req.params.id;
  
  // Handle the request to get a customer by ID
  // Example:
  const customer = customerId;
  
  if (customer) {
    res.status(200).json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found.' });
  }
});











// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});