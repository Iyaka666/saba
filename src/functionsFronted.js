/*
Funcion -> allowMultiStyles 
Entradas
    styles: Property style que por defecto si no contiene nada debe 
        ser undefined
Salida
    un arreglo de objetos property style
*/
export const allowMultiStyle = (...styles) => [...styles] 