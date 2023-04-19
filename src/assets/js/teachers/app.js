// Encargado de orquestar todas las funciones de los demás archivos
import { addEventListeners } from './operations';

export function initializeApp() {
    addEventListeners();
}