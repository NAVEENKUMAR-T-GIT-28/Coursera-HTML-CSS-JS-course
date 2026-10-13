
const recommendationForm = document.getElementById("recommendationForm");
const recommendationInput = document.getElementById("recommendationInput");
const recommendationsList = document.getElementById("recommendationsList");
const popup = document.getElementById("popup");

let popupTimer;

function showPopup(show) {
  if (show) {
    popup.classList.add("show");

    window.clearTimeout(popupTimer);
    popupTimer = window.setTimeout(function () {
      showPopup(false);
    }, 2800);
  } else {
    popup.classList.remove("show");
  }
}

function addRecommendation() {
  const message = recommendationInput.value.trim();

  if (message === "") {
    return false;
  }

  const recommendation = document.createElement("blockquote");
  recommendation.className = "recommendation";
  recommendation.textContent = "“" + message + "”";

  recommendationsList.appendChild(recommendation);
  recommendationInput.value = "";

  showPopup(true);
  return true;
}

recommendationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addRecommendation();
});
