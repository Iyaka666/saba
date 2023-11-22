//Valida las restriciones de contraseña para el usuario
export const isPasswordValid = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,}$")

//Valida que sólo pueda ingresar texto pensada para el campo de ingreso de nombres y apellidos
export const isOnlyText = new RegExp("^[a-zA-ZÁ-Úá-úüÜñÑ\s]+$")

//Valida una direccion de correo electrónico
export const isValidEmail = new RegExp("^(\w-\.)+@(\w-)+(\.\w){1,2}$")

//Valida un código como 1234567-1234 y valida cedula de 7 o 10 numeros ademas de agregar una letra
export const isValidCode = new RegExp("^(?:\d{7}-\d{4}|\d{7,10}[SCOP])$")