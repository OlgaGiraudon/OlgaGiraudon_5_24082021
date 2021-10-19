let productName = document.querySelector('#product_name'); //h2 nom du produit
let  productWindow = document.querySelector('#prodImageDiv'); //div avec photo de produit
let productDescription = document.querySelector('#product_description'); //Paragraphe avec description du produit
let productSize = document.querySelector('#lent'); //Taille de lentille
let productPrise = document.querySelector('#product_price'); //Prix du produit
const params = new URLSearchParams(window.location.search);
let productId = params.get('id');
let url = 'http://localhost:3000/api/cameras/' + productId;
let quantityOfProduct = document.querySelector('#quantityOfProduct');
let priceTotal = document.querySelector('#priceTotal');
let buttonBuy = document.querySelector('#buttonBuy');
let buttonPagedAccueil = document.querySelector('#buttonPagedAccueil');
let buttonVoirPanier = document.querySelector('#buttonVoirPanier');


function showProduct(adresseAPI, productWindow, productDescription, productSize, productPrise,) {
    fetch (adresseAPI)
    .then((response)=>
    response.json()
    )
    .then((data) => {
        let counter =0;
        for(let elem in data){
            counter++
        };
       

        if(counter != 0){ 
            let product = '';
            product =  '<img id="ProdImage" src=" ' + data.imageUrl + '" width ="100%"></div>';
            productWindow.innerHTML = product;
            
            let name = '';
            name = data.name;
            productName.innerHTML = name;
            
            let descriptionProd ='';
            descriptionProd = data.description;
            productDescription.innerHTML = "<b>Description du produit: </b><br> " + descriptionProd;
            
            let tailleObj = '';
            for(let elem in data.lenses){
                sizeSelected = data.lenses[0];
                tailleObj = '<option>'+ data.lenses[elem] +'</option>'
                productSize.innerHTML += tailleObj;
            }
            
            let prixProd = '';
            prixProd = data.price;
            productPrise.innerHTML=prixProd/100 + ' €';
            priceTotal.innerHTML ="Total à payer: " +'<b>'+productPrise.innerHTML + ' </b>';
            } else {
                productSelectDiv.style.visibility='hidden';
                productDescription.innerHTML = 'Produit non disponible';
            };
        }
    )};

showProduct(url, productWindow, productDescription, productSize, productPrise);

/*Select taille*/
let sizeSelected;
productSize.addEventListener('change', function () {
    sizeSelected=this.value;
})
/*Select quantité*/
let numberSelected = 1;
quantityOfProduct.addEventListener('change', function () {
    numberSelected=this.value;
})
/*Calcul montant total*/

quantityOfProduct.addEventListener('change', function(){
    
    priceTotal.innerHTML = "Total à payer: " + '<b>' +Number(productPrise.innerHTML.slice(0,-1))*quantityOfProduct.value + ' € </b>';
})

/*Ajout le produit dans le panier/local storage*/
buttonBuy.addEventListener('click', function () {
    let localStorageProd = localStorage.getItem('cartProducts');
    let produitObjet = {'name': productName.innerHTML,
                        'size': sizeSelected,
                        'number': String(numberSelected),
                        'prixU': String(productPrise.innerHTML.slice(0,-1)),
                        'idProduit': productId};
    if(localStorageProd === null || JSON.parse(localStorageProd).length == 0){
        produitArray = [produitObjet];
      
    localStorage.setItem('cartProducts', JSON.stringify(produitArray));
    }
    else{
        let prodArray = JSON.parse(localStorageProd);
        let idList = prodArray.map(elem => elem.idProduit);
        
        if(idList.includes(productId)){
            let positionId = idList.indexOf(productId); 
            if(prodArray[positionId].size == produitObjet.size){
                prodArray[positionId] =  produitObjet;
                
            } else {
                prodArray.push(produitObjet);
            }
        }
        else {
            prodArray.push(produitObjet);
            
        }
        localStorage.setItem('cartProducts', JSON.stringify(prodArray));
    }
    alert('Le produit a été ajouté au panier');
    
});
/*Retour à la page d'accueil ou Panier */
buttonPagedAccueil.addEventListener('click', function () {
    document.location.href = "index.html";
});
buttonVoirPanier.addEventListener('click', function () {
    document.location.href = "panier.html";
});