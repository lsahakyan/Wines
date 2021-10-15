
 

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