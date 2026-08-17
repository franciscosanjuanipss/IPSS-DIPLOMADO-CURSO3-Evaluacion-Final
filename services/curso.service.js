import { Curso } from '../models/curso.model.js'

// ---------------------------------------------------------------------------
// SERVICE — cursos. Habla con la base de datos.
// Las REGLAS DE NEGOCIO (validar estado, propiedad, etc.) pueden ir aquí o en
// el controller: tú decides, pero que estén en el servidor, no en el cliente.
// ---------------------------------------------------------------------------

export const listarCursos = () => {
    return Curso.find()
    .populate('profesor')
    .populate('alumnos')
}

export const crearCurso = (datos) => Curso.create(datos)

export const buscarCurso = (id) => Curso.findById(id)

export const editarCurso = (id, datos) => {
    return Curso.findByIdAndUpdate(id, datos, {
        returnDocument: 'after',
        runValidators: true,
    })
}

export const borrarCurso = (id) => Curso.findByIdAndDelete(id)

export const cursosDelProfesor = (profesorId) => {
    return Curso.find({profesor:profesorId}).populate('profesor')
}

export const cursosDelAlumno = (alumnoId) => {
    return Curso.find({alumnos:alumnoId}).populate('alumnos')
}
