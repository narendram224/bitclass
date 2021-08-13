import React from 'react';

type spacerType ={
    size: number;
    axis?:string;
    delegated?:React.ReactNode;
}

const Spacer: React.FC<spacerType> = ({
  size,
  axis,
  delegated,
}): JSX.Element => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
    >
      {delegated}
    </span>
  );
};
export default Spacer;
