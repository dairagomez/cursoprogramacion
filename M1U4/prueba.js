distancia= prompt("de cuanto es la distancia?");

if ( distancia >0 && distancia<=1000) {
    alert("anda a pie")
}

else if (distancia >=1000 && distancia <=10000) {
  alert("anda en bicicleta")
}
else if (distancia >=10000 && distancia <=30000) {
  alert("anda en colectivo")
}
else if (distancia >=30000 && distancia <=100000) {
  alert("anda en auto")
}
else {
  alert("anda en avion")
}