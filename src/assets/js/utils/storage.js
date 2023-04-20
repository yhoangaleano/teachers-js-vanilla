// Encargado de acceder al localStorage del navegador

export function getDatabase(dbName) {
    const database = JSON.parse(localStorage.getItem(dbName));
    return database === null ? [] : database;
}

export function setDatabase(dbName, jsonData) {
    localStorage.setItem(dbName, JSON.stringify(jsonData));
}
