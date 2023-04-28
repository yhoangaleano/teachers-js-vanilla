// De guardar, actualizar, leer o eliminar los datos en el storage
import { getDatabase, setDatabase } from './../utils/storage';

const dbName = 'db_teachers';

/**
 * Agrega un nuevo profesor a la base de datos.
 *
 * @param {Object} teacher - El objeto del profesor que se va a agregar a la base de datos.
 * @param {string} teacher.name - El nombre del profesor.
 * @param {string} teacher.description - El tema que enseña el profesor.
 * @param {string} teacher.email - El correo electrónico del profesor.
 * @param {string} teacher.birthDate - El correo electrónico del profesor.
 * @returns {void}
 */
export function createTeacher(teacher) {
    const arrayTeachers = getDatabase(dbName);
    arrayTeachers.push(teacher);
    setDatabase(dbName, arrayTeachers);
}

export function readTeachers() {
    return getDatabase(dbName);
}

export function updateTeacher(teacherUpdated) {
    const database = readTeachers().map((teacher) =>
        (teacher.id === teacherUpdated.id) ? { ...teacher, ...teacherUpdated } : teacher
    );
    setDatabase(dbName, database);
}

export function deleteTeacher( idTeacher ) {
    const database = readTeachers();
    const teacherIndex = database.findIndex(({ id }) => id === idTeacher);
    if (teacherIndex !== -1) {
        database.splice( teacherIndex, 1 );
        setDatabase(dbName, database);
    }
}

export function findTeacherById(idTeacher) {
    return readTeachers().find(({ id }) => id === idTeacher);
}