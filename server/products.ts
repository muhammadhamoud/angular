import fs from 'fs';
import { faker } from '@faker-js/faker';

import { Product
    , Review
    , ProductVariation
    , ProductAttribute
} from './models'

// Define a function to generate a fake review
const generateReview = (): Review => ({
  id: faker.string.uuid(),
  username: faker.internet.userName(),
  rating: faker.number.int({ min: 1, max: 5 }),
  reviewText: faker.lorem.paragraph(),
  date: faker.date.past(),
});

// Define a function to generate a fake product variation
const generateProductVariation = (): ProductVariation => ({
  id: faker.string.uuid(),
  name: faker.lorem.word(),
  price: faker.number.int({ min: 10, max: 200 }),
  stockQuantity: faker.number.int({ min: 1, max: 100 }),
  imageUrl: faker.image.imageUrl(),
  attributes: [
    { name: 'Size', value: faker.commerce.productName() },
    { name: 'Color', value: faker.color.human() },
  ],
});

// Define a function to generate fake products
const generateFakeProducts = (count: number): Product[] => {
  const fakeProducts: Product[] = [];

  for (let i = 0; i < count; i++) {
    const newProduct: Product = {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.lorem.sentences(),
      price: faker.number.int({ min: 10, max: 500 }),
      discountedPrice: faker.number.int({ min: 5, max: 400 }),
      imageUrl: faker.image.imageUrl(),
      brand: faker.company.name(),
      category: faker.commerce.department(),
      tags: [faker.lorem.word(), faker.lorem.word()],
      ratings: faker.number.int({ min: 1, max: 5 }),
      reviews: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, generateReview),
      stockQuantity: faker.number.int({ min: 10, max: 100 }),
      variations: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, generateProductVariation),
      isFeatured: faker.datatype.boolean(),
      isNewArrival: faker.datatype.boolean(),
      isOnSale: faker.datatype.boolean(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    fakeProducts.push(newProduct);
  }

  return fakeProducts;
};

const numberOfFakeProducts = 100;
const fakeProducts = generateFakeProducts(numberOfFakeProducts);


let existingData: { products: Product[] } = { products: [] };
try {
  const rawData = fs.readFileSync('db.json', 'utf8');
  existingData = JSON.parse(rawData);
} catch (error) {
  console.error('Error reading existing data:', error.message);
}

existingData.products.push(...fakeProducts);

try {
    fs.writeFileSync('db.json', JSON.stringify(existingData, null, 2));
    console.log(`Appended ${numberOfFakeProducts} new products to the file.`);
  } catch (error) {
    console.error('Error writing updated data:', error.message);
  }

console.log(fakeProducts);
