const calculateBmi = (height:number, weight:number):string => {
  const bmi:number = weight / ((height / 100) * (height / 100));
  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25) {
    return 'Normal (healthy weight)';
  } else if (bmi <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
};

console.log(calculateBmi(172, 66));