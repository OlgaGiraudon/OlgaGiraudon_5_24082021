//initialization  of variables and constants//
let  gridProduit = document.querySelector('#gridProduits');
let url = 'http://localhost:3000/api/cameras';
//function avec URL en parametres, resultat - code HTML//
function getProducts(adresseAPI, gridOfProducts){
    fetch (adresseAPI)
    .then((response)=>
    response.json()
    )
    .then((data) => {
        let imgHTML ='';
        if(data){ 
            for (let i in data){
                imgHTML = '<div class="divProduit">' +
                '<a class="transparent" href ="produit.html?id='+ data[i]._id +'">'+
                '<img class = "imageProduits" src="' + data[i].imageUrl + '" width ="100%" height = "265px"></a>'+
                    '<div class="nameProduit"><a href ="produit.html?id='+ data[i]._id +'">'+
                                    '<h3>'+ data[i].name +'</h3></a></div>'+
                    '</div>';
                    
                gridOfProducts.innerHTML += imgHTML;
            }  
        }else {
            imgHTML = 'Pas de produit';
            gridOfProducts.innerHTML = imgHTML;
        }
    

    
});
}
getProducts(url, gridProduit);










