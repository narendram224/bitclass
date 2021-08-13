import React from 'react';

type labelProps = {
    text:string
}
const Label: React.FC<labelProps> = ({ text }:labelProps)
: JSX.Element => (
  <div>
    <p>{text}</p>
  </div>
);

export default Label;
