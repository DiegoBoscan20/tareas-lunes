
let usuario = prompt("Ingresa el usuario:");
let contraseña = prompt("Ingresa la contraseña");

if (usuario === "admin" && contraseña === "12345") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}