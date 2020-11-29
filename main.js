const elNombre = document.getElementById('nombre')
const elEdad = document.getElementById('edad')
const elCorreo = document.getElementById('correo')

fetch('http://localhost:8000/mostrar/usuarios')
    .then(response => response.json())
    .then(data => {
        console.log('data' ,data)
        elNombre.innerHTML = JSON.stringify(data.msg[1])
        elEdad.innerHTML = JSON.stringify(data.msg[2])
        elCorreo.innerHTML = JSON.stringify(data.msg[0])
        //alert(JSON.stringify(data))})
    })   

fetch('http://localhost:8000/mostrar/usuario')
    .then(response => response.json())
    .then(data => {
            console.log('mostrar un solo usuario')
            alert(JSON.stringify(data))
    } )


//     fetch('https://localhost:8000/mostrar/usuarios/lista')
//     .then(response => { if (response.ok) { 
//         return response.json(); 
//     } 
//      else { 
//         throw new Error(response.statusText); 
//     } 
// })
//     .then(data => populate(data.message)); 
//     function populate(dog_list) { const container = document.getElementById("container");
//     for (dog in dog_list) { let li = document.createElement("li");
//     let node = document.createTextNode(dog); li.appendChild(node); container.appendChild(li); } }



    // <ul>
    // (lista de los usuarios)
    //BACK / END: 2 SERVER - server.js - root: /localhost:8000/endpoints: /mostrar/usuarios -> vector de usuarios: 
    //[{ nombre: foo, edad: 20, correo: foo@gmail.com}, bar, baz]/mostrar/usuario ->
    // [{ nombre: bar, edad: 30, correo: bar@gmail.com}]NOTA: <ul id="container"></ul>
    