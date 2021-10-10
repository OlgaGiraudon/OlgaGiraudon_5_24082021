let messageVide = document.querySelector('#messageVide');
let mainDivPanier = document.querySelector('#mainDivPanier');
let cartProducts = localStorage.getItem('cartProducts');
let cameraNameTd = document.querySelector('#cameraNameTd');
let cameraSizeTd = document.querySelector('#cameraSizeTd');
let quantityTd = document.querySelector('#quantityTd');
let priceUnit = document.querySelector('#priceUnit');
let prodId = document.querySelector('#prodId');
let suppression;
let priceTotal = document.querySelector('#priceTotal');
let tableProducts = document.querySelector('#table');
let total = document.querySelector('#total');
let calculPrixTotal = 0;
if(cartProducts === null || JSON.parse(cartProducts).length == 0){
    
    mainDivPanier.innerHTML = '';
    messageVide.innerHTML = 'Votre panier est vide.';
} else{
    
    messageVide.classList.add('small');
    let cartProductsArray = JSON.parse(cartProducts);
    for(let i =0; i< cartProductsArray.length; i++){
        let product = cartProductsArray[i];
       let tr = document.createElement('tr');
       
       let td0 = document.createElement('td');
       td0.classList.add('cameraNameTd');
       tr.appendChild(td0);
       td0.innerHTML = product.name;
       
       let td1 = document.createElement('td');
       td1.classList.add('cameraSizeTd');
       tr.appendChild(td1);
       td1.innerHTML = product.size;
      
       let td2 = document.createElement('td');
       td2.classList.add('quantityTd');
       tr.appendChild(td2);
       td2.innerHTML = product.number;
       let quantNumber = Number(td2.innerHTML);
       
       
       let td3 = document.createElement('td');
       td3.classList.add('priceUnit');
       tr.appendChild(td3);
       td3.innerHTML = product.prixU + ' €';
       let priceNumber = Number(td3.innerHTML.slice(0,-1));   

        let td4 = document.createElement('td');
        td4.classList.add('priceTotal');
        let prixTotalNumber = quantNumber*priceNumber;
        calculPrixTotal +=prixTotalNumber;
        td4.innerHTML = prixTotalNumber + ' €';;
        tr.appendChild(td4);
       
       let td5 = document.createElement('td');
       td5.classList.add('deleteProduct');
       td5.innerHTML = '<i class="fas fa-trash"><span id="prodId"></span></i>';
       tr.appendChild(td5);
       tableProducts.appendChild(tr);
       td5.addEventListener('click', function () {
           
       });
    };

    total.innerHTML = 'Total à payer: ' + calculPrixTotal + ' €';  
    
    /*suppression.addEventListener('click', function() {
        let idList = product.map(elem => elem.idProduit);
        if(idList.includes(product[0].idProduit)){
            let positionId = idList.indexOf(product[0].idProduit);
            product.splice(positionId,1);
            localStorage.setItem('cartProducts', JSON.stringify(product));
            location.reload();
        }
        
    });*/


}