class Estudiante{
        nombre = `Marcos`
        asignaturas = [ `Javascript`, `HTML`,`CSS`]
        obtenDatos(){
            return {
            nombre: this.nombre,
            asignaturas : this.asignaturas,
            }
        }
}

const nuevoEstudiante = new Estudiante();


console.log(nuevoEstudiante.obtenDatos());
    
