/*
Funcion -> allowMultiStyles 
Entradas
    defaultStyle: un estilo que el componente establece por defecto 
        puede o no existir
    styles: Property style que por defecto si no contiene nada debe 
        ser undefined
Salida
    un arreglo de objetos property style
*/
export const allowMultiStyle = (defaultStyle, styles) => {
    if( (styles === undefined) && (defaultStyle === undefined) ) 
        throw new Error('No se han definido parametros')
    
    if( styles === undefined) return defaultStyle
    
    if( Array.isArray(styles) ) {
        if (!(defaultStyle === undefined)) styles.push(defaultStyle)
        return styles
    }
    else return [defaultStyle, styles]    
} 