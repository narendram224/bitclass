import React from 'react';
import HorizontalLine from '../atoms/HorizontalLine';
import IconImage from '../atoms/IconImage';
import SubTitle from '../atoms/SubTitle';
import Title from '../atoms/Title';

type iBProps={
    src: string;
    title: string;
    subtitle: string;
    width?: number;
}

const IconButtonTwoLabel: React.FC<iBProps> = ({
  src, title, subtitle, width = 30,
}):JSX.Element => (
  <div className="flex item-center justify-between border-2 border-black rounded-primary pt-1 pb-2 pl-1 pr-2 ">
    <IconImage src={src} width={width} />
    <div className="pl-1">
      <SubTitle subtitleText={subtitle} align="left" />
      <Title titleText={title} align="left" />
    </div>

  </div>
);

export default IconButtonTwoLabel;
