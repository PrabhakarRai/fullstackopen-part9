import patientsInfo from '../../data/patients';
import { Patient, NonSensitivePatient } from "../types";

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

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  getEntriesNonSensitive,
  addEntry,
};
