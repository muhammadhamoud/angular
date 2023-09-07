import fs from 'fs';
import { faker } from '@faker-js/faker';

// const faker = new Faker();
const numNewUsers = 10;

interface User {
  id: string;
  email: string;
  password: string;
  // Add more properties as needed
}

const generateUser = (): User => ({
  id: faker.string.uuid(),
  email: faker.internet.email(),
  password: faker.person.lastName(),
});

// Read the existing data from the JSON file
let existingData: { users: User[] } = { users: [] };
try {
  const rawData = fs.readFileSync('db.json', 'utf8');
  existingData = JSON.parse(rawData);
} catch (error) {
  console.error('Error reading existing data:', error.message);
}

// Generate new users
const newUsers: User[] = Array.from({ length: numNewUsers }, generateUser);

// Append the new user data to the existing data
existingData.users.push(...newUsers);

// Write the updated data back to the JSON file
try {
  fs.writeFileSync('db.json', JSON.stringify(existingData, null, 2));
  console.log(`Appended ${numNewUsers} new users to the file.`);
} catch (error) {
  console.error('Error writing updated data:', error.message);
}
















// import fs from 'fs';
// import { faker } from '@faker-js/faker';
// // import jsonServer from 'json-server';
// const numUsers = 10; 

// interface User {
//   id: string;
//   email: string;
//   password: string;
//   // Add more properties as needed
// }

// const generateUser = (): User => ({
//   id: faker.string.uuid(),
//   email: faker.internet.email(),
//   password: faker.person.lastName()
// });

// const users: User[] = Array.from({ length: numUsers }, generateUser);
// const data = { users };
// fs.writeFileSync('db.json', JSON.stringify(data, null, 2));

// console.log(`Generated ${numUsers} users.`);
