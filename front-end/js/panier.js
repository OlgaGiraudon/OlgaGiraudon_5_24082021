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
let buttonViderpanier = document.querySelector('#buttonViderpanier');
let buttonPageDaccueil = document.querySelector('#buttonPageDaccueil');
let buttonAcheter = document.querySelector("#buttonAcheter");
let userSurname = document.querySelector('#userSurname');
let userName = document.querySelector('#userName');


if(cartProducts === null || JSON.parse(cartProducts).length == 0){
    
    mainDivPanier.innerHTML = '';
    messageVide.innerHTML = 'Votre panier est vide. <br> <button class = "buttonUser buttonPagePanier">Returner à la page d\'accueil</button>'; 
    messageVide.addEventListener('click', function(event){
        if(event.target.localName == 'button'){
            document.location.href = "index.html";
        }
    });
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
buttonViderpanier.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});
buttonPageDaccueil.addEventListener('click', function () {
    document.location.href = "index.html";
});
buttonAcheter.addEventListener('click', function(){
   let regExprUserDataSurname =new RegExp(userSurname.value);
   let regExprUserDataName = new RegExp(userName.value)
        if(userSurname.value === ""){
            alert('Veuillez saisir votre nom');
        }
            else if(userName.value === ""){
                alert('Veuillez saisir votre nom et prénom ');
            } 
            else if(/\d/.test(regExprUserDataSurname)){
            alert('Vérifier lorthographe de votre nom de famille');
            }
            else if(/\d/.test(regExprUserDataName)){
                alert('Vérifier lorthographe de votre prénom');
            }
        else {
                localStorage.setItem('surname', JSON.stringify(userSurname.value));
                localStorage.setItem('name', JSON.stringify(userName.value));
                document.location.href = "confirmation.html";
            }
   
});

