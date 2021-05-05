import express from 'express';
import { calculateBmi, parseArgumentsBmiExpress } from './bmiCalculator';
const app = express();

const PORT = 3001;

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
    console.error(e, req.query);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
