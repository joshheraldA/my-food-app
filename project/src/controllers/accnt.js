const account_data = require('../../db/account.json')

const getAccounts = (req, res) => {
    account_data.accounts.forEach(account => {
        console.log(account.username)
        console.log(account.password)
    })
    res.json({ success: true, data: account_data})
}

module.exports = {
    getAccounts
}