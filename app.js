import { food } from './food.js';
import { renderFruit } from './render.js';

const foodList = document.getElementById('food-list');

for (let fruit of food){
    const fruitCard = renderFruit(fruit);
    foodList.append(fruitCard);
}
