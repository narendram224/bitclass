import React from 'react';

type subTitleProps ={
    subtitleText: string;
    align?:string;
}
const SubTitle: React.FC<subTitleProps> = ({ subtitleText, align }): JSX.Element => (
  <h6 className={`text-xss text-gray-300 text-${align}`}>{subtitleText}</h6>
);

export default SubTitle;
