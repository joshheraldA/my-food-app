const result = document.querySelector('.result')


async function getFood() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
        if(!response.ok) {
            throw new Error(`There is an error with a status code of ${response.status}`)
        }

        const data = await response.json()
        const { meals } = data;
        console.log(meals)
        const mealPictures = meals.map(meal => {
            return `
            <div class=card-food>
                <img src=${meal['strMealThumb']} alt=pictureofFood></img>
                <a href="details.html?id=${meal['idMeal']}" class=meal-names>${meal['strMeal']}</a>
            </div>
            `
        }).join('')
        
        result.innerHTML = mealPictures


    } catch(err) {
        console.log(err)
    }
}

getFood()