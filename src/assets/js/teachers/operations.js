// Encargado de la interacción de js con html
import { formElements, getFormData } from './form';
import { createTeacher } from './repository';

export function listeners() {
    window.addEventListener('load', () => {
        listenFormSubmitEvent();
    });
}

function listenFormSubmitEvent() {
    formElements.form.addEventListener('submit', (event) => {
        event.preventDefault();
        createTeacher(getFormData());
    });
}

