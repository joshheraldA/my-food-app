const btn = document.querySelector('#login-submit-btn')

const username_input = document.querySelector('#username')
const password_input = document.querySelector('#password')

const label_p = document.querySelector("#label-password")
const label_u = document.querySelector("#label-username")

const details = document.querySelector('#result')

btn.addEventListener('click', async(event) => {
    event.preventDefault()
    
    const username_value = username_input.value
    const password_value = password_input.value

    async function getAccountData() {
        try {
            const response = await fetch('/accnts')
            if(!response.ok) {
                throw new Error(`There is an error ${response.status}`)
            }

            const jsonResponse = await response.json()
            const { data } = jsonResponse 
            
            data.accounts.forEach(account => {
                counter = 0;

                if(!(password_value === account.password)) {
                    password_input.style.borderColor = "red"
                    label_p.style.color = "#FF0000";                    
                    counter++
                }
                if(!(username_value === account.username)) {
                    username_input.style.borderColor = "red"
                    label_u.style.color = "#FF0000";                    
                    counter++

                }

                if(counter !== 0) {
                    console.log('Login FAILED')
                    return
                }

                window.location.href = '/home.html'
                console.log("Login successfull")

            })
            
        } catch(err) {
            console.log(err)
        }
    }

    getAccountData()
})