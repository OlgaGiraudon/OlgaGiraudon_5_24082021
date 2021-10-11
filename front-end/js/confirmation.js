let message = document.querySelector('#message');
let date = new Date();
message.innerHTML = 'Madame(Monsieur) ' + JSON.parse(localStorage.getItem('surname')) + ' ' + 
JSON.parse(localStorage.getItem('name')) +
'! <br> Nous vous remercions de votre achat. <br> '+
'Votre numero de comande est: <b>' + (JSON.parse(localStorage.getItem('surname')).split('')[0]).toUpperCase() +
JSON.parse(localStorage.getItem('name')).split('')[0].toUpperCase()+
date.getFullYear() + (date.getMonth()+1)+ date.getDate() + '</b>. <br>'+
'La livraison sera effectuée à l\'adresse suivante: ';