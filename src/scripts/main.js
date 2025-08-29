'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;

for (const item of populationList) {
  total += +item.textContent.replaceAll(',', '');
}

totalPopulation.textContent = total.toLocaleString('en-US');

averagePopulation.textContent = Math.round(
  total / populationList.length,
).toLocaleString('en-US');
