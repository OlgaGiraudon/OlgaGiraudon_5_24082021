//initialization  of variables and constants//
let  gridProduit = document.querySelector('#gridProduits');
let imgHTML;


/*const navIcon = document.querySelector('.navIcon');*/
let url = 'http://localhost:3000/api/cameras';
//Get the photos and show them on the main page
fetch (url)
.then((response)=>
    response.json()
)
.then((data) => {
for (let i in data){
imgHTML = '<div class="imageProduit"> <h3 class="nameProduit">' + data[i].name + '</h3> <img  src="' + data[i].imageUrl + '" alt="" width = 100% ></div>';
gridProduit.innerHTML += imgHTML;
}
}
);






