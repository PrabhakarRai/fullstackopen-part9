import React from 'react';

interface SingleContent {
  name: string;
  exerciseCount: number;
}
interface ContentProps {
  info:Array<SingleContent>;
}

const Content = (props:ContentProps) => {
  return (
    <div>
      {props.info.map((c) => <p key={c.name}>{c.name} {c.exerciseCount}</p>)}
    </div>
  )
};

export default Content;
