let messageVide = document.querySelector('#messageVide');
let mainDivPanier = document.querySelector('#mainDivPanier');
let message = localStorage.getItem('message');
if(message == null){
    
    mainDivPanier.innerHTML = '';
    messageVide.innerHTML = 'Votre panier est vide.';
}