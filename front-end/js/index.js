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
                let url = new URLSearchParams();
                url.set('id',productObj._id );
                urlProduit = 'produit.html?'+ url.toString();
                imgHTML = '<div class="divProduit">' +
                '<a class="transparent" href ="' + urlProduit + '">'+
                '<img class = "imageProduits" src="' + productObj.imageUrl + '" width ="100%" height = "265px"></a>'+
                    '<div class="nameProduit"><a href ="'+ urlProduit +'">'+
                                    '<h3>'+ productObj.name +'</h3></a></div>'+
                    '</div>';
                    
                gridOfProducts.innerHTML += imgHTML;
              
            }  
        } else{
            imgHTML = '<p id="messageIndex">Aucun produit n\'est disponible</p>';
            gridOfProducts.innerHTML = imgHTML;
        }
        });
    }
getProducts(url, gridProduit);










