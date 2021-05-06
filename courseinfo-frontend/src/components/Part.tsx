import React from 'react';
import { CoursePart } from '../types';

interface PartProps {
  course: CoursePart;
}

const Part = (props:PartProps) => {
  switch (props.course.type) {
    case 'normal':
      return (
        <>
          <p><b>{props.course.name} {props.course.exerciseCount}</b></p>
          <span><i>{props.course.description}</i></span>
        </>
      )
      break;
    case 'groupProject':
      return (
        <>
          <p><b>{props.course.name} {props.course.exerciseCount}</b></p>
          <span>Project exercises: {props.course.groupProjectCount}</span>
        </>
      )
      break;
    case 'submission':
      return (
        <>
          <p><b>{props.course.name} {props.course.exerciseCount}</b></p>
          <span><i>{props.course.description}</i></span>
          <br />
          <span>Submit to: {props.course.exerciseSubmissionLink}</span>
        </>
      )
      break;
    case 'special':
      return (
        <>
          <p><b>{props.course.name} {props.course.exerciseCount}</b></p>
          <span><i>{props.course.description}</i></span>
          <br />
          <span>Required skills: {props.course.requirements.join(', ')}</span>
        </>
      )
      break;
    
    default:
      return assertNever(props.course);
  }
};

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
}

export default Part;
