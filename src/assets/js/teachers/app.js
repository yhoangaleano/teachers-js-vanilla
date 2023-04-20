// Encargado de orquestar todas las funciones de los demás archivos
import { listeners } from './operations';

export function initializeApp() {
    listeners();
}