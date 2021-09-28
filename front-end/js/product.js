let productName = document.querySelector('#product_name'); //h2 nom du produit
let  productWindow = document.querySelector('#prodImage'); //div avec photo de produit
let productDescription = document.querySelector('#product_description'); //Paragraphe avec description du produit
let productSize = document.querySelector('#lent'); //Taille de lentille
let productPrise = document.querySelector('#product_price'); //Prix du produit
const params = new URLSearchParams(window.location.search);
let url = 'http://localhost:3000/api/cameras/' +params.get('id');
let quantityOfProduct = document.querySelector('#quantityOfProduct');
let priceTotal = document.querySelector('#priceTotal');


function showProduct(adresseAPI, productWindow, productDescription, productSize, productPrise,) {
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
            
            for(let elem in data.lenses){
                tailleObj = '<option>'+ data.lenses[elem] +'</option>'
                productSize.innerHTML += tailleObj;
            }
            
            let prixProd = '';
            prixProd = data.price;
            productPrise.innerHTML=prixProd/100 + '€';
            
    }
    )};

showProduct(url, productWindow, productDescription, productSize, productPrise);

/*Montant total*/
quantityOfProduct.addEventListener('change', function(){
    
    priceTotal.value = Number(productPrise.innerHTML.slice(0,-1))*quantityOfProduct.value + ' €';
})