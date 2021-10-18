let messageVide = document.querySelector('#messageVide');
let mainDivPanier = document.querySelector('#mainDivPanier');
let cartProducts = localStorage.getItem('cartProducts');
let cameraNameTd = document.querySelector('#cameraNameTd');
let cameraSizeTd = document.querySelector('#cameraSizeTd');
let quantityTd = document.querySelector('#quantityTd');
let priceUnit = document.querySelector('#priceUnit');

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
let userAdress = document.querySelector('#userAdress');
let userCity = document.querySelector('#userCity');
let userPostalCode = document.querySelector('#userPostalCode');
let userPhoneNumber = document.querySelector('#userPhoneNumber');
let userMail = document.querySelector('#userMail');
let champsObligatoiresArray = [userSurname,userName,userAdress, userCity, userPostalCode, userMail];
let champsTousArray = [userSurname,userName,userAdress, userCity, userPostalCode, userPhoneNumber, userMail];
if(cartProducts === null || JSON.parse(cartProducts).length == 0){
    
    mainDivPanier.innerHTML = '';
    messageVide.innerHTML = 'Votre panier est vide. <br> <button class = "buttonUser buttonPagePanier">Retourner à la page d\'accueil</button>'; 
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
       td5.innerHTML = '<i class="fas fa-trash suppression"><span id="prodId"></span></i>';
       
       tr.appendChild(td5);
       tableProducts.appendChild(tr);
       let prodId = document.querySelector('#prodId');
       prodId.innerHTML = product.idProduit;

       
        let td6 = document.createElement('td');
        td6.classList.add('videProduct');
        tr.appendChild(td6);
    };

    total.innerHTML = 'Total à payer: ' + calculPrixTotal + ' €';  
    localStorage.setItem('priceTotal', JSON.stringify(calculPrixTotal));
    
    /*Suppression du produit*/
    let suppressionItem = document.querySelectorAll('.suppression');  
    suppressionItem.forEach((element,index) => {
        element.addEventListener('click', function () {
            deleteItemSelect(index); 
        })
       
    });
    function deleteItemSelect(index) {
       cartProductsArray.splice(index, 1);
       localStorage.setItem('cartProducts', JSON.stringify(cartProductsArray) );
       location.reload();
       
    };
}
buttonViderpanier.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});
buttonPageDaccueil.addEventListener('click', function () {
    document.location.href = "index.html";
});
/*Function verification si le champ de formulaire est vide*/
function verifChampVide(champsArray) {
    for(let elem of champsArray){
        var varBoolean1 = true;
        if(elem.value === ""){
            alert('Veuillez saisir votre ' + elem.name);
            varBoolean1 = false;
            break;
        } 
    };
    if (varBoolean1){
        verifChampSaisie(champsTousArray);
    };
};
/*Function verification la saisie du formulaire */
function verifChampSaisie(champsArray){
    let objDataUser ={};
    var varBoolean = true;
    for(let elem of champsArray){
        let regExprUserData = elem.value;
        if(elem.name == 'nom' || elem.name == 'prenom' || elem.name == 'ville'){
            if(!/^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/.test(regExprUserData)){
                varBoolean = false;
                alert('Le champ ' + elem.name + ' est invalide. Veuillez verifier la saisie');
                break;
                }
                else if(elem.name == 'nom'){
                        objDataUser.surname = elem.value;
                        
                    }
                    else if(elem.name == 'prenom'){
                        objDataUser.name = elem.value;
                        
                    }
                    else if(elem.name == 'ville'){
                        objDataUser.city = elem.value;
                    };
        }
        else if(elem.name == 'adresse'){
            objDataUser.adress = elem.value;
        }
        else if(elem.name == 'code_postal'){
            if(!/^[a-zA-Z0-9]+$/.test(regExprUserData)){
                
                alert('Le champ "Code postal" est invalide. Veuillez verifier la saisie');
                varBoolean = false;
                break;
            }
            else {
                objDataUser.code = elem.value;
            }
        }
        else if(elem.name == 'numero'){
                if (!(regExprUserData == "") && !(/^[0-9\+]+$/.test(regExprUserData))){
                console.log(regExprUserData);
                alert('Le champ "Numéro de téléphone" est invalide. Veuillez verifier la saisie');
                varBoolean = false;
                break;
            };
        }
        else if(elem.name == 'email'){
            if(!/^.+\@+.+\..+$/.test(regExprUserData)){
                alert('Le champ "Email" est invalide. Veuillez verifier la saisie');
                varBoolean = false;
                break;
            };
        };
    };
    localStorage.setItem('userData', JSON.stringify(objDataUser));
    if(varBoolean){
        document.location.href = "confirmation.html";
    }
   
};

buttonAcheter.addEventListener('click', function(){
    verifChampVide(champsObligatoiresArray);
    
});

