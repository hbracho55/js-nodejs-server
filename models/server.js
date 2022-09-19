const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.requestPath = '/api/requests'

        //middlewares
        this.middlewares()

        //routes
        this.routes()
    }

    middlewares(){

        //CORS
        this.app.use(cors())

        //lectura y parseo del body-request
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.requestPath,require('../routes/request'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        })
    }
}

module.exports = Server