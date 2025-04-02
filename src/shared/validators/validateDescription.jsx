export const validateDescripcion = (descripcion) => {
    return descripcion.length >= 10 && descripcion.length <= 200
}

export const descripcionValidateMessage = "la descripcion debe tener entre 10 y 200 caracteres"