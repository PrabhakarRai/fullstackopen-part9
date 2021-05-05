interface ECResult {
  periodLenght: number,
  trainingDays: number,
  target: number,
  average: number,
  success: boolean,
  rating: 1 | 2 | 3,
  ratingDescription: string,
};

enum Rating {
  Bad = 'Bad! You should push harder for achieving your target',
  Normal = 'Not too bad but could be better',
  Good = 'Wooow!! You are on fire. 🔥',
}

const Average = (numbers:Array<number>):number => {
  const sum:number = numbers.reduce((ttl, value) => ttl + value, 0);
  return sum / numbers.length;
}

const exerciseCalculator = (data:Array<number>, target:number): ECResult => {
  const average = Average(data);
  const trainedOnDays = data.filter((value) => value > 0);
  let rating:1|2|3;
  let ratingDescription:string;
  if (average <= target * 0.8) {
    rating = 1;
    ratingDescription = Rating.Bad;
  } else if (average <= target * 1.2) {
    rating = 2;
    ratingDescription = Rating.Normal;
  } else {
    rating = 3;
    ratingDescription = Rating.Good;
  }
  return {
    periodLenght: data.length,
    trainingDays: trainedOnDays.length,
    target: target,
    success: average >= target,
    average,
    rating,
    ratingDescription,
  };
}

console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 2));