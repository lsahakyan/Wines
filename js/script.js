
/*

fetch("https://api.spoonacular.com/food/wine/recommendation?apiKey=a2a79f76d0f94d98aed568376b57a236&wine=${''}&number=2")

	

.then(response => 
	response.json()
)
.then(data =>
 
	
  console.log(data.recommendedWines[0].title)
  );
let assortiment = document.querySelector(".assortiment")
 assortiment.addEventListener("mouseHover", function(event){
   event.target.style.display = "block";
 });

 var myIndex = 0;
 carousel();
 
 function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}
   x[myIndex-1].style.display = "block";
   setTimeout(carousel, 3000);
 }







 function getMealList(){
  let searchInputTxt = document.getElementById('search-input').value.trim();
  fetch(`https://api.spoonacular.com/food/wine/recommendation?apiKey=a2a79f76d0f94d98aed568376b57a236&i=${searchInputTxt}&number=4`)
  .then(response => response.json())
  .then(data => {
      let html = "";
      if(data.pairings){
          data.meals.forEach(meal => {
              html += `
                  <div class = "meal-item" data-id = "${meal.idMeal}">
                      <div class = "meal-img">
                          <img src = "${meal.strMealThumb}" alt = "food">
                      </div>
                      <div class = "meal-name">
                          <h3>${meal.strMeal}</h3>
                          <a href = "#" class = "recipe-btn">Get Recipe</a>
                      </div>
                  </div>
              `;
          });
          mealList.classList.remove('notFound');
      } else{
          html = "Sorry, we didn't find any meal!";
          mealList.classList.add('notFound');
      }

      mealList.innerHTML = html;
  });
}*/




var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

const searchBtn = document.getElementById('search-btn');
const wineList = document.getElementById('wine');
const wineDetailsContent = document.querySelector('.wine-details-content');
const wineCloseBtn = document.getElementById('wine-close-btn');

// event listeners
searchBtn.addEventListener('click', getWineList);
wineList.addEventListener('click', getWineRecipe);
wineCloseBtn.addEventListener('click', () => {
    wineDetailsContent.parentElement.classList.remove('showWine');
});


// get meal list that matches with the ingredients
function getWineList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://api.spoonacular.com/food/wine/recommendation?apiKey=a2a79f76d0f94d98aed568376b57a236&wine=${searchInputTxt}&number=100`)
    .then(response => response.json())
    .then(data => {
        
        let html = "";
        if(data.recommendedWines){
            data.recommendedWines.forEach(recommendedWines => {
                html += `
                    <div class = "meal-item" data-id = "${recommendedWines.id}">
                        <div class = "meal-img">
                            <img src = "${recommendedWines.imageUrl}" alt = "food">
                        </div>
                        <div class = "wine-name">
                            <h3>${recommendedWines.title}</h3>
                            <a href = "#" class = "wine-btn">Get Wine</a>
                        </div>
                    </div>
                `;
            });
            wineList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find this sort of Wine!";
            wineList.classList.add('notFound');
        }

        wineList.innerHTML = html;
    });
}

/*
// get recipe of the meal
function getWineRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('wine-btn')){
        let wineItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${wineItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}*/
/*
// create a modal
function wineRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "wine-title">${meal.strMeal}</h2>
        <p class = "wine-category">${meal.strCategory}</p>
        <div class = "wine-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
*/
