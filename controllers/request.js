const {response} = require('express')

const requestGet = (req, res) => {

    //en caso de que vengan varios urlParams
    const {pag='no oag', nombre = 'no name', limit} = req.query

    res.json({
        msg: 'get API',
        pag,
        nombre,
        limit
    })
}

const requestPost = (req, res) => {
    
    const {nombre, edad} = req.body

    res.json({
        msg: 'post API',
        nombre,
        edad
    })
}

const requestPut = (req, res) => {
    
    const id = req.params.id

    res.json({
        msg: 'post API',
        nombre,
        edad
    })
}

module.exports = {
    requestGet,
    requestPost,
    requestPut
}