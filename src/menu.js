let content = document.querySelector('#content')

function createItem(name, description) {
    const item = document.createElement("div");
    item.classList.add("item");
    content.appendChild(item)
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = `images/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;

    item.appendChild(foodName);
    item.appendChild(foodDescription);
    item.appendChild(foodImage);
}

function createMenu() {
    createItem('Sushi', 'A delicacy.')
    createItem('Omelette', 'Delicious!')
    createItem('Ramen', 'My favorite!')
    createItem('Rice', 'Just some fried rice.')
}

export default createMenu;