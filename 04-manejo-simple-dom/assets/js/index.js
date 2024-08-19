    //aparecer texto oculto 
document.getElementById('text1').addEventListener('mouseover', function() {
    document.getElementById('text2').style.display = 'block'; 
});

document.getElementById('text1').addEventListener('mouseout', function() {
    document.getElementById('text2').style.display = 'none'; 
}); //fin texto oculto


    //imagen crecimiento, 100% ancho de su contenedor
function bigImg(big) {
    big.style.height = "100%";
    big.style.width = "100%";
}

function normalImg(norm) {
    norm.style.height = "200px";
    norm.style.width = "200px";
}   //fin imagen crecimiento

    //agrandar texto 3 doble click
document.getElementById('caja3').addEventListener('dblclick', function() {
    this.classList.toggle('clicGrande');
});