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

const getEntryById = (id:string):Patient | undefined => {
  return patientsInfo.find((p) => p.id === id);
}

const addEntry = (data:PatientEntry):Patient => {
  const patient:Patient = {
    ...data,
    entries: [],
    id: uuid(),
  };
  patientsInfo.push(patient);
  return patient;
};

export default {
  getEntries,
  getEntriesNonSensitive,
  getEntryById,
  addEntry,
};
