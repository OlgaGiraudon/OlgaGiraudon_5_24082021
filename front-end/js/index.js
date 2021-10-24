//initialisation  des variables//
let  gridProduit = document.querySelector('#gridProduits');
let url = 'http://localhost:3000/api/cameras';
//fonction avec URL et élément DOM en paramètres, résultat - code HTML//
function getProducts(adresseAPI, gridOfProducts){
    fetch (adresseAPI)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imgHTML ='';
        if(data.length>0){
            for (let productObj of data){
                imgHTML = '<div class="divProduit">' +
                '<a class="transparent" href ="produit.html?id='+ productObj._id +'">'+
                '<img class = "imageProduits" src="' + productObj.imageUrl + '" width ="100%" height = "265px"></a>'+
                    '<div class="nameProduit"><a href ="produit.html?id='+ productObj._id +'">'+
                                    '<h3>'+ productObj.name +'</h3></a></div>'+
                    '</div>';
                    
                gridOfProducts.innerHTML += imgHTML;
              
            }  
        } else{
            imgHTML = '<p id="messageIndex">Aucun produit est disponible</p>';
            gridOfProducts.innerHTML = imgHTML;
        }
        });
    }
getProducts(url, gridProduit);










