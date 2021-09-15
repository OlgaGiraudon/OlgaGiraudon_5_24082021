let productName = document.querySelector('#product_name'); //h2 nom du produit
let  productWindow = document.querySelector('#prodImage'); //div avec photo de produit
let productDescription = document.querySelector('#product_description'); //Paragraphe avec description du produit
let productSize = document.querySelector('#lent'); //Taille de lentille
let productPrise = document.querySelector('#product_price'); //Prix du produit
let url = 'http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b061';

function showProduct(adresseAPI, productWindow, productDescription, productSize, productPrise) {
    fetch (adresseAPI)
    .then((response)=>
    response.json()
    )
    .then((data) => {
            let product = '';
            product =  '<img  src=" ' + data.imageUrl + '" width ="100%"></div>';
            productWindow.innerHTML = product;
            let name = '';
            name = data.name;
            productName.innerHTML = name;
            let descriptionProd ='';
            descriptionProd = data.description;
            productDescription.innerHTML = descriptionProd;
            let tailleObj = '';
            tailleObj = data.lenses;
            productSize.innerHTML = tailleObj;
            let prixProd = '';
            prixProd = data.price;
            productPrise.innerHTML=prixProd/100 + '€';
            
    }
    )};

showProduct(url, productWindow, productDescription, productSize, productPrise);

