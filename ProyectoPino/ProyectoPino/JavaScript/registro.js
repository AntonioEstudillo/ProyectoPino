import {saveUsuario} from './firebase.js'

window.addEventListener('DOMContentLoaded', () =>{
    console.log('works')
})

const formulario = document.getElementById('registro-usuario');



formulario.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = formulario['nombre']
    const apellido =formulario['apellido']
    const correo = formulario['correo']
    const tel = formulario['telefono']
    const password = formulario['password']

    saveUsuario(nombre.value, apellido.value, correo.value, tel.value, password.value)

    

    console.log('submiting')
})

