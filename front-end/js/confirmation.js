let message = document.querySelector('#message');
let date = new Date();
let objUserData = JSON.parse(localStorage.getItem('userData'));
message.innerHTML = 'Madame(Monsieur) ' + objUserData.surname + ' ' + objUserData.name +
'! <br> <br> Nous vous remercions de votre achat. <br> '+
/*Numéro de commande = Première lettre du nom en majuscule  + Première lettre du prénom en majuscule + la date de commande + un nombre aléatoire */
'Votre numéro de comande est: <b>' + (objUserData.surname.split('')[0]).toUpperCase() +
objUserData.name.split('')[0].toUpperCase()+
date.getFullYear() + (date.getMonth()+1)+ date.getDate() + Math.ceil(Math.random()*100) + '</b>  du <b>' + date.getDate() + '-' +(date.getMonth()+1)+ '-' + date.getFullYear() +
'</b>. <br>'+
'Le montant de votre commande est:  <b>' + JSON.parse(localStorage.getItem('priceTotal')) + '€. </b> <br>' +
'La livraison sera effectuée à l\'adresse suivante: ' + objUserData.adress + ', ' + objUserData.city + ' ' + objUserData.code + ' .<br> <br>'+
'L\'équipe Oricam. '













