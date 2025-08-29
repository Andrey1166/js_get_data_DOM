'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;
let validCount = 0;

for (const item of populationList) {
  let num = item.textContent.replaceAll(',', '');
  if (Number(num)) {
    total += +num;
    validCount++;
  }
}

totalPopulation.textContent = total.toLocaleString('en-US') || 0;

averagePopulation.textContent = Math.round(
  total / validCount,
).toLocaleString('en-US') || 0;
