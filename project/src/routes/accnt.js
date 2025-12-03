const express = require('express')

const router = express.Router()

const { getAccounts } = require('../controllers/accnt')


router.get('/', getAccounts)


module.exports = router