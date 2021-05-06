import React from 'react';
import { CoursePart } from '../types';
import Part from './Part';

interface ContentProps {
  courses: CoursePart[];
}

const Content = (props:ContentProps) => {
  return (
    <div>
      {props.courses.map((c) => <Part key={c.name} course={c} />)}
    </div>
  )
};

export default Content;
