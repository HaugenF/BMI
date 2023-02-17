function bmiCalc(weight, height) {
  return weight / (height / 100) ** 2;
}

const bmiForm = document.getElementById("bmi");
const result = document.getElementById("BMIresult");

bmiForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const getWeight = document.getElementById("weight").value;
  const getHeight = document.getElementById("height").value;

  const bmiResult = bmiCalc(getWeight, getHeight);

  result.innerHTML = "Ditt BMI är " + bmiResult.toFixed(1);
});
