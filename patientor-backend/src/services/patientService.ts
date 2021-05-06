import { v1 as uuid } from 'uuid';
import patientsInfo from '../../data/patients';
import { Patient, NonSensitivePatient, PatientEntry } from "../types";

const getEntries = ():Array<Patient> => {
  return patientsInfo;
};

const getEntriesNonSensitive = ():Array<NonSensitivePatient> => {
  return patientsInfo.map(({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    }
  ));
};

const addEntry = (data:PatientEntry):Patient => {
  const patient:Patient = {
    ...data,
    id: uuid(),
  };
  patientsInfo.push(patient);
  return patient;
};

export default {
  getEntries,
  getEntriesNonSensitive,
  addEntry,
};
