// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  entries: Entry[],
  gender: Gender;
  occupation: string;
}

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries' >;

export type PatientEntry = Omit<Patient, 'id' | 'entries' >;
