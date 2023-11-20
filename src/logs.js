import fs from 'react-native-fs'

const getTimeStampedFileName = () => {
    const timeStamp = new Date().toISOString().replace(/[:.]/g,'-')
    return `${timeStamp}_saba_log.txt`
}


export const logFile = (error) => {
    const logFilePath = `${fs.DocumentDirectoryPath}/${getTimeStampedFileName()}`
    const bodyFile = `Archivo -> ${error.fileName}\n Linea ${error.lineNumber}:Columna ${error.columnNumber}\nError -> ${error.name}\nDescripción -> ${error.message}` 
    
    fs.appendFile(logFilePath, bodyFile, 'utf8')
        .then(() => console.log('Log guardado en el archivo:', logFilePath))
        .catch((error) => console.error('Error al guardar el log en el archivo:', error))
}