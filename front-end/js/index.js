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
            imgHTML += '<div class="imageProduit"> '+
                '<h3 class="nameProduit">' + data[i].name + '</h3>'+
                '<a href="produit.html?id='+data[i]._id+'">'+
                 '<img  src="' + data[i].imageUrl + '" alt="Photo of '+ data[i].name +'" width ="100%"  ></a></div>';
        }
        gridOfProducts.innerHTML += imgHTML;
    }

    })
}


//Get the photos and show them on the main page
getProducts(url, gridProduit);











