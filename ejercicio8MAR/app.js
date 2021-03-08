let datos = [
        {
            "nombre": "lucas",
            "dni": "40455964",
            "curso": "CursoA",
            "legajo": "ACursoA404559642021",
            "nacimiento": "30/05/97",
            "nota": "120",
            "telefono": "1573629943",
            "email": "lucas@gmail.com"
        },
        {
            "nombre": "tomas",
            "dni": "45691849",
            "curso": "CursoB",
            "legajo": "ACursoB456918492021",
            "nacimiento": "25/04/96",
            "nota": "90",
            "telefono": "1573629943",
            "email": "tomas@gmail.com"
        },

    ]
    
let validator = {
    comprobarEmail: function () {
        let correo = document.getElementById('email').value;
        if(correo.length > 50 || correo == '') {
            alert('tu email no debe tener mas de 50 caracteres');
            return false;
        } return true
    },
    comprobarNombre: function () {
        let nombre = document.getElementById('nombre').value;
        if(nombre.length > 10 || nombre == '') {
            alert('tu nombre no debe tener mas de 10 caracteres');
            return false;
        } 
        return nombre;
    },
    comprobarCelular: function () {
        let celular = document.getElementById('telefono').value;
        if(celular.length > 10 || celular == '') {
            alert('tu celular no debe tener mas de 10 caracteres');
            return false;
        } 
        return celular;
    },
    comprobarEdad: function () {
        var hoy = new Date();
        var nacimiento = new Date(document.getElementById('nacimiento').value)
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        var mes = hoy.getMonth() - nacimiento.getMonth();
        if(mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        if(edad < 18 || isNaN(edad)) {
            alert('Debes ser mayor para ingresar a esta página');
            return false
        } return true
    },
    comprobarCurso: function () {
        var curso = document.getElementById("curso");
        let cursoSeleccionado = curso.options[curso.selectedIndex].innerHTML;
        return cursoSeleccionado
    },
    comprobarLegajo: function () {
        let legajoInput = document.getElementById('legajo').value;
        legajo = datos.find(dato => dato.legajo === legajoInput);
        if(legajo == undefined) {
            alert('Por favor, ingrese un legajo válido')
            return false;
        } return true
    }
}

let generarLegajo = document.getElementById('generarLegajo');
generarLegajo.addEventListener('click', (event) => {
    event.preventDefault();
    let dni = document.getElementById('dni').value;
    let curso = document.getElementById('curso').innerHTML;
    document.getElementById('legajo').value = 'A' + validator.comprobarCurso() + dni + '2021';
})

const formularioButton = document.getElementById('formularioButton');
formularioButton.addEventListener('click', (event) => {
    event.preventDefault();
    let email = validator.comprobarEmail();
    let nombre = validator.comprobarNombre();
    let edad = validator.comprobarEdad();
    let celular = validator.comprobarCelular();
    let legajo = validator.comprobarLegajo();
    if(edad != false && email != false && nombre != false && legajo != false && celular != false){
        document.getElementById('formulario').style.display = 'none';
        operaciones.menu();
        }
    })

/* SECTION PROMEDIO */

let operaciones = {
    menu: function () {
        document.getElementById('container').style.display = 'block';
    },
    calcularPromedio: function () {
        promedio = 0;
        let quimica = document.getElementById('quimica');
        let matematica = document.getElementById('matematica');
        let sociales = document.getElementById('sociales');
        let fisica = document.getElementById('fisica');
        let historia = document.getElementById('historia');
        let biologia = document.getElementById('biologia');
        let informatica = document.getElementById('informatica');
        let idioma = document.getElementById('idioma');
        if(quimica.value > 10 || quimica.value < 0) {
            alert('por favor, ingrese un digito del 1 al 10');
            return false;
        } else if(quimica.value >= 5) {
        promedio = promedio + 10
        }
        if(matematica.value > 10 || matematica.value < 0) {
            alert('por favor, ingrese un digito del 1 al 10');
            return false;
        } else if(matematica.value >= 5) {
            promedio = promedio + 20
        }
        if(sociales.value > 10 || sociales.value < 0) {
            alert('por favor, ingrese un digito del 1 al 10');
            return false;
        } else if(sociales.value >= 5) {
            promedio = promedio + 5
        }
        if(fisica.value > 10 || fisica.value < 0) {
            alert('por favor, ingrese un digito del 1 al 10');
            return false;
        } else if(fisica.value >= 5) {
            promedio = promedio + 10
        }
        if(historia.value > 10 || historia.value < 0) {
            alert('por favor, ingrese un digito del 1 al 10');
            return false;
        } else if(historia.value >= 5) {
            promedio = promedio + 5
        }
        if(biologia.value > 10 || biologia.value < 0) {
            alert('por favor, ingrese un digito del 1 al 10');
            return false;
        } else if(biologia.value >= 5) {
            promedio = promedio + 20
        }
        if(informatica.value > 10 || informatica.value < 0) {
            alert('por favor, ingrese un digito del 1 al 10');
            return false;
        } else if(informatica.value >= 5) {
            promedio = promedio + 30
        }
        if(idioma.value > 10 || idioma.value < 0) {
            alert('por favor, ingrese un digito del 1 al 10');
            return false;
        } else if(idioma.value >= 5) {
            promedio = promedio + 30
        }
        if (quimica == false || matematica == false || sociales == false || fisica == false || historia == false || biologia == false || informatica == false || idioma == false) {
            alert('Por favor, corrobore sus datos y vuelva a intentarlo');
        }
        else if(promedio >= 100) {
            document.getElementById('resultadoPromedio').innerHTML = "Felicidades, usted pasó de año con un porcentaje de " + promedio + "%";
        } else {
            document.getElementById('resultadoPromedio').innerHTML = "Lo siento, pero usted reprueba el año"
        }
    }   
}

let calcularPromedio = document.getElementById('calcularPromedio');
calcularPromedio.addEventListener('click', () => {
    operaciones.calcularPromedio();
})

let materiasButton = document.getElementById('materiasButton');
let buscarButton = document.getElementById('buscarButton');
let listarButton = document.getElementById('listarButton');
let salirButton = document.getElementById('salirButton');

salirButton.addEventListener('click', (event) => {
    return new Promise((resolve, reject) => {
        let respuesta = confirm('Está seguro que desea salir?')
        resolve(respuesta)
    })
    .then(res => {
        if(res == false) {
            event.preventDefault()
        } else {
            alert('muchas gracias por su visita!')
        }
    })
})

materiasButton.addEventListener('click', () => {
    document.getElementById('materias').style.display = 'block';
    document.getElementById('buscarAlumno').style.display = 'none';
    document.getElementById('listarAlumno').style.display = 'none';
})


buscarButton.addEventListener('click', () => {
    document.getElementById('buscarAlumno').style.display = 'block';
    document.getElementById('materias').style.display = 'none';
    document.getElementById('listarAlumno').style.display = 'none';
})

listarButton.addEventListener('click', () => {
    document.getElementById('buscarAlumno').style.display = 'none';
    document.getElementById('materias').style.display = 'none';
    document.getElementById('listarAlumno').style.display = 'block';
    let listaAlumnos = document.getElementById('listaAlumnos'); 
    datos.forEach(dato => {
        listaAlumnos.innerHTML += `
            <hr>
            <h4>Legajo: A${dato.curso}${dato.dni}2021</h4>
            <h4>Curso: ${dato.curso}</h4>
            <h4>DNI: ${dato.dni}</h4>
            <h4>Nombre: ${dato.nombre}</h4>
            <h4>Nacimiento: ${dato.nacimiento}</h4>
            <h4>Telefono: ${dato.telefono}</h4>
            <h4>Email: ${dato.email}</h4>
        `;
    })
})


let buscarAlumno = {
    buscarDNI: function () {
        document.getElementById('inputDNI').style.display = 'block';
        document.getElementById('buscaDNI').style.display = 'block';
        document.getElementById('inputNombre').style.display = 'none';
        document.getElementById('buscaNombre').style.display = 'none';
        document.getElementById('inputCelular').style.display = 'none';
        document.getElementById('buscaCelular').style.display = 'none';
        document.getElementById('inputEmail').style.display = 'none';
        document.getElementById('buscaEmail').style.display = 'none';
    },
    buscarNombre: function () {
        document.getElementById('inputNombre').style.display = 'block';
        document.getElementById('buscaNombre').style.display = 'block';
        document.getElementById('inputDNI').style.display = 'none';
        document.getElementById('buscaDNI').style.display = 'none';
        document.getElementById('inputCelular').style.display = 'none';
        document.getElementById('buscaCelular').style.display = 'none';
        document.getElementById('inputEmail').style.display = 'none';
        document.getElementById('buscaEmail').style.display = 'none';
    },
    buscarCelular: function () {
        document.getElementById('inputCelular').style.display = 'block';
        document.getElementById('buscaCelular').style.display = 'block';
        document.getElementById('inputNombre').style.display = 'none';
        document.getElementById('buscaNombre').style.display = 'none';
        document.getElementById('inputDNI').style.display = 'none';
        document.getElementById('buscaDNI').style.display = 'none';
        document.getElementById('inputEmail').style.display = 'none';
        document.getElementById('buscaEmail').style.display = 'none';
    },
    buscarEmail: function () {
        document.getElementById('inputEmail').style.display = 'block';
        document.getElementById('buscaEmail').style.display = 'block';
        document.getElementById('inputCelular').style.display = 'none';
        document.getElementById('buscaCelular').style.display = 'none';
        document.getElementById('inputNombre').style.display = 'none';
        document.getElementById('buscaNombre').style.display = 'none';
        document.getElementById('inputDNI').style.display = 'none';
        document.getElementById('buscaDNI').style.display = 'none';
    }
}

let buscarDNI = document.getElementById('buscarDNI');
let buscarNombre = document.getElementById('buscarNombre');
let buscarCelular = document.getElementById('buscarCelular');
let buscarEmail = document.getElementById('buscarEmail');

buscarDNI.addEventListener('click', () => {
    buscarAlumno.buscarDNI();
    document.getElementById('buscaDNI').addEventListener('click', () => {
        let inputDNI = document.getElementById('inputDNI').value;
        return new Promise((resolve, reject) => {
            let estudiante = datos.find(dato => dato.dni === inputDNI);
            resolve(estudiante);
        })
        .then(res => {
            if(res != undefined) {
                document.getElementById('resultadoDNI').innerHTML = `
                    <h4>Nombre: ${res.nombre}</h4>
                    <h4>Curso: ${res.curso}</h4>
                    <h4>DNI: ${res.dni}</h4>
                    <h4>Legajo: A${res.curso}${res.dni}2021</h4>
                    <h4>Email: ${res.email}</h4>
                    <h4>Telefono: ${res.telefono}</h4>
                `
            } else {
                document.getElementById('resultadoDNI').innerHTML = "No encontramos resultados para ese usuario"
            }
        })
    })
})

buscarNombre.addEventListener('click', () => {
    buscarAlumno.buscarNombre();
    document.getElementById('buscaNombre').addEventListener('click', () => {
        let inputNombre = document.getElementById('inputNombre').value;
        return new Promise((resolve, reject) => {
            let estudiante = datos.find(dato => dato.nombre === inputNombre);
            resolve(estudiante);
        })
        .then(res => {
            if(res != undefined) {
                document.getElementById('resultadoNombre').innerHTML = `
                    <h4>Nombre: ${res.nombre}</h4>
                    <h4>Curso: ${res.curso}</h4>
                    <h4>DNI: ${res.dni}</h4>
                    <h4>Legajo: A${res.curso}${res.dni}2021</h4>
                    <h4>Email: ${res.email}</h4>
                    <h4>Telefono: ${res.telefono}</h4>
                `
            } else {
                document.getElementById('resultadoNombre').innerHTML = "No encontramos resultados para ese usuario"
            }
        })
    })
})

buscarCelular.addEventListener('click', () => {
    buscarAlumno.buscarCelular();
    document.getElementById('buscaCelular').addEventListener('click', () => {
        let inputCelular = document.getElementById('inputCelular').value;
        return new Promise((resolve, reject) => {
            let estudiante = datos.find(dato => dato.celular === inputCelular);
            resolve(estudiante);
        })
        .then(res => {
            if(res != undefined) {
                document.getElementById('resultadoCelular').innerHTML = `
                    <h4>Nombre: ${res.nombre}</h4>
                    <h4>Curso: ${res.curso}</h4>
                    <h4>DNI: ${res.dni}</h4>
                    <h4>Legajo: A${res.curso}${res.dni}2021</h4>
                    <h4>Email: ${res.email}</h4>
                    <h4>Telefono: ${res.telefono}</h4>
                `
            } else {
                document.getElementById('resultadoCelular').innerHTML = "No encontramos resultados para ese usuario"
            }
        })
    })
})

buscarEmail.addEventListener('click', () => {
    buscarAlumno.buscarEmail();
    document.getElementById('buscaEmail').addEventListener('click', () => {
        let inputEmail = document.getElementById('inputEmail').value;
        return new Promise((resolve, reject) => {
            let estudiante = datos.find(dato => dato.email === inputEmail);
            resolve(estudiante);
        })
        .then(res => {
            if(res != undefined) {
                document.getElementById('resultadoEmail').innerHTML = `
                    <h4>Nombre: ${res.nombre}</h4>
                    <h4>Curso: ${res.curso}</h4>
                    <h4>DNI: ${res.dni}</h4>
                    <h4>Legajo: A${res.curso}${res.dni}2021</h4>
                    <h4>Email: ${res.email}</h4>
                    <h4>Telefono: ${res.telefono}</h4>
                `
            } else {
                document.getElementById('resultadoEmail').innerHTML = "No encontramos resultados para ese usuario"
            }
        })
    })
})