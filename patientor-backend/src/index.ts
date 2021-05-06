import express from 'express';
import cors from 'cors';
import pingRouter from './routes/ping';
import diagnosesRouter from './routes/diagnoses';
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/ping', pingRouter);
app.use('/api/diagnoses', diagnosesRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
