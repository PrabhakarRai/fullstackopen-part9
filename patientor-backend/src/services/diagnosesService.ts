import diagnosesData from '../../data/diagnoses';
import { DiagnosesEntry } from '../types';

const getEntries = ():DiagnosesEntry[] => {
  return diagnosesData;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry,
};