const clientes = [
    { nombre: "Cristopher", identificador: "12345", clave: "1122", saldo: 300000},
    { nombre: "Maria", identificador: "112233", clave: "3344", saldo: 260000 },
    { nombre: "Juan", identificador: "445566", clave: "5566", saldo: 100500 },
];

let clienteActual = null;

function login() {
    alert("Bienvenido a la Banca en línea");
    const id = prompt("Ingresa tu identificador:");
    const pass = prompt("Ingresa tu clave:");

    clienteActual = clientes.find(
        (cliente) => cliente.identificador === id && cliente.clave === pass
    );

    if (clienteActual) {
        alert(`Bienvenido ${clienteActual.nombre}`);
        mostrarMenu();
    } else {
        alert("Identificador o clave incorrectos.");
    }
}

function mostrarMenu() {
    const opcion = prompt(
        `Seleccione que decea hacer:\n1. Ver saldo\n2. Realizar giro\n3. Realizar depósito\n4. Salir`
    );

    if (opcion === "1") {
        verSaldo();
    } else if (opcion === "2") {
        realizarGiro();
    } else if (opcion === "3") {
        realizarDeposito();
    } else if (opcion === "4") {
        salir();
    } else {
        alert("Por favor selecciona una opción del 1 al 4.");
        mostrarMenu();
    }
}

function verSaldo() {
    alert(`Su saldo actual es: $${clienteActual.saldo}`);
    mostrarMenu();
}

function realizarGiro() {
    const monto = parseFloat(
        prompt(
            `Tu saldo actual es: $${clienteActual.saldo}\nIngrese el monto que desea girar`
        )
    );

    if (monto <= 0 || isNaN(monto)) {
        alert("Ingrese un monto válido.");
    } else if (monto > clienteActual.saldo) {
        alert("Saldo insuficiente");
    } else {
        clienteActual.saldo -= monto;
        alert(`Giro realizado.  Su nuevo saldo es $${clienteActual.saldo}`);
    }

    mostrarMenu();
}

function realizarDeposito() {
    const monto = parseFloat(
        prompt(
            `Su saldo actual es: $${clienteActual.saldo}\nIngrese el monto que desea depositar`
        )
    );

    if (monto <= 0 || isNaN(monto)) {
        alert("Ingrese un monto válido.");
    } else {
        clienteActual.saldo += monto;
        alert(`Desposito realizado. Su nuevo saldo es: $${clienteActual.saldo}`);
    }
    mostrarMenu();
}

function salir() {
    alert("Gracias por preferir nuestros servicios");
    clienteActual = null;
    login();
}

login();
