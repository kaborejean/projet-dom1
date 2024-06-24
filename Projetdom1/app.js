document.querySelector('.remove').addEventListener('click', () => {
  document.querySelector('.item').remove();
  updateTotal(-19,500); // Met à jour le total en soustrayant le prix de l'article
});

document.querySelector('.checkout').addEventListener('click', () => {
  alert('Paiement effectué avec succès!');
});

function updateTotal(amount) {
  let totalPriceElement = document.querySelector('.total-price');
  let currentTotal = parseFloat(totalPriceElement.textContent.split(' ')[2]);
  let newTotal = currentTotal + amount;
  totalPriceElement.textContent = `Total : ${newTotal.toFixed(2)} €`;
}

const item = document.querySelector('.item');

const likeButton = document.createElement('button');
likeButton.innerHTML = 'Like';
likeButton.classList.add('like-button');

item.appendChild(likeButton);