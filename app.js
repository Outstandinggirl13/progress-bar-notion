const containerBoxElement = document.querySelector(".container__box");
const containerGradientOverlayElement = document.querySelector(".container__gradient-overlay");

function updateGradientWidth() {
  const width = containerBoxElement.offsetWidth - 14; // calculate width dynamically
  containerGradientOverlayElement.style.width = width + 'px';
}

// Call once on page load
updateGradientWidth();

// Update whenever the window is resized
window.addEventListener('resize', updateGradientWidth);

const containerNumberElement = document.querySelector(".container__number");
const containerProgressBarElement = document.querySelector(".container__progress-bar");
const containerCaloriesCurrentElement = document.querySelector(".container__calories-current");
const containerCaloriesGoalElement = document.querySelector(".container__calories-goal");
const containerDayNumberElement = document.querySelector(".container__day-number");

let caloriesArray = [];
// Add daily progress
caloriesArray.push(770); // Day 1

let startingWeight = 82.2;
let goalWeight = 56;
let totalCalories = caloriesArray.reduce((acc, curr) => acc + curr, 0);
let goalCalories = Math.round((startingWeight - goalWeight) * 7700);
let percentCalories = (totalCalories / goalCalories * 100) < 10 
                    ? Math.round((totalCalories / goalCalories * 100) * 10) / 10 
                    : Math.round(totalCalories / goalCalories * 100);

containerCaloriesGoalElement.textContent = goalCalories;
containerDayNumberElement.textContent = `${caloriesArray.length}`;

containerCaloriesCurrentElement.textContent = totalCalories;
containerNumberElement.textContent = percentCalories;
containerProgressBarElement.style.width = `calc(${percentCalories}% - 14px)`;
