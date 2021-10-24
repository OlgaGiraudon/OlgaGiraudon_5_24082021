let message = document.querySelector('#message');
let objUserData = JSON.parse(localStorage.getItem('userData'));
 message.innerHTML = 'Madame(Monsieur) ' + objUserData.surname + ' ' + objUserData.name +
 '! <br> <br> Nous vous remercions de votre achat. <br> '+
'Votre numéro de comande est: <b>' + localStorage.getItem('idCommand') + '</b> <br>'+
'Le montant de votre commande est:  <b>' + JSON.parse(localStorage.getItem('priceTotal')) + '€. </b> <br>' +
'La livraison sera effectuée à l\'adresse suivante: ' + objUserData.adress + ', ' + objUserData.city + ' ' + objUserData.code + ' .<br> <br>'+
'L\'équipe Oricam. '













