const express = require('express')
const server = express()
const usuarios = require('./mostrar_usuarios')
const cors = require('cors')

server.use(cors())


server.get('/' , (req, resp) => {
    return resp.json({'msg': 'inicio'})
})
server.get('/mostrar/usuarios' , (req, resp) => {
    console.log('mostrar usuarios')
    return resp.json({'msg': usuarios.map((item) => {
        return item.nombre + ' ' + item.edad + ' ' + item.correo
    })})
    
}) 




// server.get('/mostrar/usuarios/lista', (req, response) => {
//     return response.json()
// })



server.get('/mostrar/usuario' , (req, resp) => {
    console.log('mostrar un usuario')
    return resp.json({'msg':'[{nombre : foo, edad: 20, correo: foogmail.com}]'})
})


server.listen(8000, () => {
    console.log('inicio del servidor')
})
