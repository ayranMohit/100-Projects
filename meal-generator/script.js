const APIUL = "https://www.themealdb.com/api/json/v1/1/random.php";

$(document).ready(function () {
  $("#getMealBtn").click(function () {
    fetch(APIUL)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.meals[0]);
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("container-fluid");
        resultDiv.innerHTML = `<div id="thirdCon" class="row text-center">
        <div class="col-lg-4 col-md-12" id="imgDiv" >
          <img class="" style="width:300px" src="${json.meals[0].strMealThumb}" alt""/>
        </div>
        <div class="col-md-8 text-center">
          <h1>${json.meals[0].strMeal}</h1>
          <p>${json.meals[0].strInstructions}</p>
        </div>
      </div>
      <div class="row text-start " id="CaArTa">
        <h3 >Category: ${json.meals[0].strCategory}</h3>
        <h4>Area: ${json.meals[0].strArea}</h4>
        <h5>Tags: ${json.meals[0].strTags}</h5>
      </div> `;
        const mealData = json.meals[0];
        const strIngredient = [];
        for (let i = 0; i <= 20; i++) {
          if (mealData["strIngredient" + i]) {
            strIngredient.push(
              `${mealData["strIngredient" + i]} - ${mealData["strMeasure" + i]}`
            );
          }
        }
        $("#result").html(resultDiv);
        strIngredient.map((ing) => {
          $("#result").append(`<ul><li>${ing}</li></ul>`);
        });
        $("#result").append(
          `<br><div class=""> <iframe width="420" height="315"
          src="https://www.youtube.com/embed/${mealData.strYoutube.slice(-11)}">
          </iframe> </div>`
        );
      });
  });
});
