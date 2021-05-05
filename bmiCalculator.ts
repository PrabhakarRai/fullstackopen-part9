interface PersonData {
  height:number,
  weight:number,
}

export const calculateBmi = (data:PersonData):string => {
  const bmi:number = data.weight / ((data.height / 100) * (data.height / 100));
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

const parseArgumentsBmi = (args:Array<string>):PersonData => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

export const parseArgumentsBmiExpress = (args:Array<string>):PersonData => {
  if (args.length != 2) throw new Error('Not enough arguments');

  if (!isNaN(Number(args[0])) && !isNaN(Number(args[0]))) {
    return {
      height: Number(args[0]),
      weight: Number(args[1]),
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

try {
  const params = parseArgumentsBmi(process.argv);
  console.log(calculateBmi(params));
} catch (e) {
  console.error('Error: something bad happend, message:', e);
  console.log('Usage: ts-node bmiCalculator.ts <height> <weight>');
}
