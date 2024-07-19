let addToy = false;

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#new-toy-btn');
  const toyFormContainer = document.querySelector('.container');
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = 'block';
    } else {
      toyFormContainer.style.display = 'none';
    }
  });
});

//Fetch Andy's toys and Add Toy Info to the card
let toysContainer = document.getElementById('toy-collection');
window.addEventListener('load', () => {
  fetch('http://localhost:3000/toys')
    .then((response) => response.json())
    .then((data) => {
      for (let toy of data) {
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card');

        let h2 = document.createElement('h2');
        h2.innerText = toy.name;
        cardContainer.appendChild(h2);

        let img = document.createElement('img');
        cardContainer.appendChild(img);
        img.setAttribute('src', toy.image);
        img.classList.add('toy-avatar');

        let p = document.createElement('p');
        p.textContent = toy.likes + ' likes';
        cardContainer.appendChild(p);

        let button = document.createElement('button');
        cardContainer.appendChild(button);
        button.classList.add('like-btn');
        button.setAttribute('id', toy.id);

        toysContainer.appendChild(cardContainer);
      }
    });
});

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: event.target.name.value,
      image: event.target.image.value,
      likes: 0,
    }),
  });
});

let likeButtons = document.getElementsByClassName('like-btn');
for (let i = 0; i < likeButtons.length; i++) {
  console.log(likeButtons[i]);
}
//Patch code
likeButtons.addEventListener('click', () => {
  let newNumberOfLikes = toy.likes++;
  fetch(`http://localhost:3000/toys/${likeButtonid}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      likes: newNumberOfLikes,
    }),
  });
  p.textContent = newNumberOfLikes;
});