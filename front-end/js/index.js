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
        if(data){
        let imgHTML ='';
        for (let i in data){
            imgHTML = '<div class="divProduit">' +
            '<img src="' + data[i].imageUrl + '" width ="100%" height = "265px">'+
                '<div class="nameProduit"><a href ="produit.html?id='+ data[i]._id +'">'+
                                '<h3>'+ data[i].name +'</h3></a></div>'+
                '</div>';
                
        gridOfProducts.innerHTML += imgHTML;
    }

    };
});
}
getProducts(url, gridProduit);










