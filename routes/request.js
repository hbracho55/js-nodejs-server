const {Router} = require('express')
const { requestGet, requestPost, requestPut } = require('../controllers/request')

const router = Router()

router.get('/', requestGet )

router.post('/', requestPost)

router.put('/:id', requestPut)

router.delete('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API'
    })
})

/* router.get('/*', (req, res) => {
    res.send('404 Page not found')
})
 */

module.exports = router