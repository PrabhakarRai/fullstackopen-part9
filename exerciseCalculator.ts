interface ECResult {
  periodLenght: number,
  trainingDays: number,
  target: number,
  average: number,
  success: boolean,
  rating: 1 | 2 | 3,
  ratingDescription: string,
}

interface ECInput {
  dailyExercises:Array<number>,
  target:number,
}

enum Rating {
  Bad = 'Bad! You should push harder for achieving your target',
  Normal = 'Not too bad but could be better',
  Good = 'Wooow!! You are on fire. 🔥',
}

const Average = (numbers:Array<number>):number => {
  const sum:number = numbers.reduce((ttl, value) => ttl + value, 0);
  return sum / numbers.length;
};

const exerciseCalculator = (data:ECInput): ECResult => {
  const average = Average(data.dailyExercises);
  const trainedOnDays = data.dailyExercises.filter((value) => value > 0);
  let rating:1|2|3;
  let ratingDescription:string;
  if (average <= data.target * 0.8) {
    rating = 1;
    ratingDescription = Rating.Bad;
  } else if (average <= data.target * 1.2) {
    rating = 2;
    ratingDescription = Rating.Normal;
  } else {
    rating = 3;
    ratingDescription = Rating.Good;
  }
  return {
    periodLenght: data.dailyExercises.length,
    trainingDays: trainedOnDays.length,
    target: data.target,
    success: average >= data.target,
    average,
    rating,
    ratingDescription,
  };
};

const parseArgumentsExe = (args:Array<string>):ECInput => {
  if (args.length < 4) throw new Error('Not enough arguments');
  const dailyExercises:Array<number> = [];
  for (let i = 3; i < args.length; i++) {
    if (isNaN(Number(args[i]))) {
      throw new Error('Provided daily exercises were not numbers!');
    } else {
      dailyExercises.push(Number(args[i]));
    }
  }
  if (!isNaN(Number(args[2]))) {
    return {
      dailyExercises,
      target: Number(args[2]),
    };
  } else {
    throw new Error('Provided target value was not number!');
  }
};

try {
  const params = parseArgumentsExe(process.argv);
  console.log(exerciseCalculator(params));
} catch (e) {
  console.error('Error: something bad happend, message:', e);
  console.log('Usage: ts-node bmiCalculator.ts <target> <daily> <daily> ...');
}
