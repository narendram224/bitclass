import React from 'react';

type logoType ={
    src:string,
    width?:number,
    height?:number,
}
const IconImage: React.FC<logoType> = ({ src, width = 20, height = 20 }): JSX.Element => (
  <div>
    <img src={src} width={`${width}px`} height={`${height}px`} alt="logo_bitclass" />
  </div>

);

export default IconImage;
