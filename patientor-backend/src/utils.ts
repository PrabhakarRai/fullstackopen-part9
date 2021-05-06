import { PatientEntry } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (param:unknown):string => {
  if (!param || !isString(param)) {
    throw new Error('Incorrect or missing string');
  }
  return param;
}

type PatientEntryFields = {
  name : unknown,
  dateOfBirth: unknown,
  ssn: unknown,
  gender: unknown,
  occupation: unknown,
};

export const toNewPatientEntry = ({
  name,
  dateOfBirth,
  ssn,
  gender,
  occupation
}:PatientEntryFields):PatientEntry => {
  const newPatientEntry:PatientEntry = {
    name: parseString(name),
    dateOfBirth: parseString(dateOfBirth),
    ssn: parseString(ssn),
    gender: parseString(gender),
    occupation: parseString(occupation),
  }
  return newPatientEntry;
}
