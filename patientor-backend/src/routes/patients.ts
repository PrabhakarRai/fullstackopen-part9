import express from 'express';
import patientService from '../services/patientService';
import { toNewPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientService.getEntriesNonSensitive());
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json(patientService.getEntryById(id));
});

router.post('/', (req, res) => {
  try {
    const data = toNewPatientEntry(req.body);
    const addedPatient = patientService.addEntry(data);
    res.json(addedPatient);
  } catch (e) {
    console.log((e as Error).message);
    res.status(400).send((e as Error).message);
  }
});

export default router;
