import express from 'express';
import { calculateBmi, parseArgumentsBmiExpress } from './bmiCalculator';
import exerciseCalculator, { ECInput } from './exerciseCalculator';
const app = express();

const PORT = 3001;

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    if (!req.query['height'] || !req.query['weight']) {
      throw new Error('height & weight query params are required!');
    }
    const height = String(req.query['height']);
    const weight = String(req.query['weight']);
    const params = parseArgumentsBmiExpress([height, weight]);
    const bmiResult = calculateBmi(params);
    res.json({
      height: params.height,
      weight: params.weight,
      bmi: bmiResult,
    });
  } catch (e) {
    res.status(400).json({
      error: {
        message: 'malformatted parameters',
      },
      usage: '/bmi?weight=70&height=170',
    });
    console.error((e as Error).message, req.query);
  }
});

app.post('/exercises', (req, res) => {
  try {
    const dailyExercises = req.body['daily_exercises'];
    const target = req.body['target'];
    const dailyExercisesSanitized:Array<number> = [];
    let targetSanitized:number;
    if (!dailyExercises || !target) {
      throw new Error('parameters missing');
    }

    if (!Array.isArray(dailyExercises)) {
      throw new Error('malformatted parameters');
    }

    for (let i = 0; i < dailyExercises.length; i++) {
      if (isNaN(Number(dailyExercises[i]))) {
        throw new Error('malformatted parameters');
      } else {
        dailyExercisesSanitized.push(Number(dailyExercises[i]));
      }
    }
    if (isNaN(Number(target))) {
      throw new Error('malformatted parameters');
    } else {
      targetSanitized = Number(target);
    }

    const params:ECInput = {
      dailyExercises: dailyExercisesSanitized,
      target: targetSanitized,
    }
    const result = exerciseCalculator(params);
    res.json(result);
  } catch (e) {
    res.status(400).json({
      error: {
        message: (e as Error).message,
      },
    });
    console.error((e as Error).message, req.body);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
