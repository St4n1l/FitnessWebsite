document.getElementById('calculator').addEventListener('submit', function(event) 
{
  event.preventDefault();

  
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseFloat(document.getElementById('age').value);
  const activityLevel = parseFloat(document.getElementById('activity-level').value);
    const heightInMeters = height / 100;

    let BMI = weight / (heightInMeters * heightInMeters);
    let BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    let TDEE = BMR * activityLevel;
    document.getElementById('BMI').innerText = BMI.toFixed(2);
    document.getElementById('Maintanence').innerText = TDEE.toFixed(2);
});

