
let citas;


do {
     citas = prompt("Escriba el numero que indica el mensaje motivacional que desea ver: \n1.- EXITO. \n2.- PERSEVERANCIA. \n3.- AUTOESTIMA. \n4.- SUPERACION PERSONAL. \n5.- SALIR");

    switch (citas) {
        case "1":
            alert('"El éxito es la suma de pequeños esfuerzos repetidos día tras día. Robert Collier"');   
            break;

        case "2":
            alert('"Nunca te rindas. Las grandes cosas llevan tiempo. Anónimo"');
            break;

        case "3":
        alert('"La confianza en uno mismo es el primer secreto del éxito. Ralph Waldo Emerson"');
            break;

        case "4":
            alert('"Nunca es demasiado tarde para ser lo que podrías haber sido. George Eliot"');
            break;

        case "5":
            alert("Fin de la aplicación");
            break;       
    }
} while (citas !== "5"); 

