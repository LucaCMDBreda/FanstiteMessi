let appeltaart = document.querySelector("#appeltaart");
let satesaus = document.querySelector("#satesaus");

function functie(){
console.log(tekst.value);
}

appeltaart.addEventListener('click', function(){
    if(appeltaart.innerHTML =='<h3>Iets kleins</h3>') {
        appeltaart.innerHTML = 'Iets Kleiners';}
    else { appeltaart.innerHTML = '<h3>Iets kleins</h3>';
    }
});


satesaus.addEventListener('click',function(){
   if (satesaus.style.color == 'black') {
    satesaus.style.color = 'Red'
} else { 
    satesaus.style.color = 'black';
}
});