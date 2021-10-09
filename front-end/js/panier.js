let messageVide = document.querySelector('#messageVide');
let mainDivPanier = document.querySelector('#mainDivPanier');
let cartProducts = localStorage.getItem('cartProducts');
let cameraNameTd = document.querySelector('#cameraNameTd');
let cameraSizeTd = document.querySelector('#cameraSizeTd');
let quantityTd = document.querySelector('#quantityTd');
let priceUnit = document.querySelector('#priceUnit');
let prodId = document.querySelector('#prodId');
let suppression = document.querySelector('.fa-trash');

if(cartProducts === null || JSON.parse(cartProducts).length == 0){
    
    mainDivPanier.innerHTML = '';
    messageVide.innerHTML = 'Votre panier est vide.';
} else{
    
    messageVide.classList.add('small');
    let product = JSON.parse(cartProducts);
    cameraNameTd.innerHTML = product[0].name;
    cameraSizeTd.innerHTML =  product[0].size;
    quantityTd.innerHTML =  product[0].number;
    priceUnit.innerHTML =  product[0].prixU + ' €';

    prodId.innerHTML =  product[0].idProduit;

    suppression.addEventListener('click', function() {
        let idList = product.map(elem => elem.idProduit);
        if(idList.includes(product[0].idProduit)){
            let positionId = idList.indexOf(product[0].idProduit);
            product.splice(positionId,1);
            localStorage.setItem('cartProducts', JSON.stringify(product));
            location.reload();
        }
        
    })


}