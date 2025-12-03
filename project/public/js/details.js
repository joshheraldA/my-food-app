const result = document.querySelector(".result")

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = urlParams.get('id');

    if (mealId) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const { meals } = await response.json();

            console.log(meals)
            
            result.innerHTML = `<p>${meals[0]["strMeal"]}</p>`
    



        } catch (error) {
            console.error('Error fetching food details:', error);
        }
    }
});

