export function renderFruit(fruit){
    const fruitCard = document.createElement('li');
    fruitCard.classList.add('food-item');

    const img = document.createElement('img');
    img.src = fruit.img;

    const fruitName = document.createElement('span');
    fruitName.textContent = fruit.name;
    fruitName.classList.add('food-name');

    fruitCard.append(img, fruitName);
    return fruitCard;
}