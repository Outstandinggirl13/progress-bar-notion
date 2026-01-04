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
caloriesArray.push(600); // Day 1
caloriesArray.push(807); // Day 2
caloriesArray.push(544); // Day 3
caloriesArray.push(807); // Day 4
caloriesArray.push(490); // Day 5
caloriesArray.push(0); // Day 6
caloriesArray.push(807); // Day 7
caloriesArray.push(602); // Day 8
caloriesArray.push(807); // Day 9
caloriesArray.push(597); // Day 10
caloriesArray.push(807); // Day 11
caloriesArray.push(573); // Day 12
caloriesArray.push(807); // Day 13
caloriesArray.push(0); // Day 14
caloriesArray.push(613); // Day 15
caloriesArray.push(0); // Day 16
caloriesArray.push(591); // Day 17
caloriesArray.push(807); // Day 18
caloriesArray.push(605); // Day 19
caloriesArray.push(807); // Day 20
caloriesArray.push(807); // Day 21
caloriesArray.push(620); // Day 22
caloriesArray.push(0); // Day 23
caloriesArray.push(622); // Day 24
caloriesArray.push(808); // Day 25
caloriesArray.push(592); // Day 26
caloriesArray.push(808); // Day 27
caloriesArray.push(808); // Day 28
caloriesArray.push(636); // Day 29
caloriesArray.push(0); // Day 28
caloriesArray.push(539); // Day 28
caloriesArray.push(999); // Day 28
caloriesArray.push(571); // Day 28
caloriesArray.push(808); // Day 28
caloriesArray.push(813); // Day 28


let startingWeight = 83.5;
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
