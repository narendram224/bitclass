import React from 'react';

type titleProps ={
    titleText:string;
    align?:string
}
const Title: React.FC<titleProps> = ({ titleText, align = 'center' }): JSX.Element => (
  <h1 className={`text-grey-200 text-xl text-${align} leading-5`}>{titleText}</h1>
);

export default Title;
