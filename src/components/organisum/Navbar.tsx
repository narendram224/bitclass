import React from 'react';
import Brand from '../atoms/Brand';
import HorizontalLine from '../atoms/HorizontalLine';
import Label from '../atoms/Label';
import PrimaryButton from '../atoms/PrimaryButton';
import SearchInput from '../atoms/SearchInput';
import Spacer from '../atoms/Spacer';
import IconButtonTwoLabel from '../molecules/IconButtonTwoLabel';

const Navbar :React.FC = (): JSX.Element => (

  <nav className="flex justify-between items-center px-4 py-6 w-full fixed top-0 left-0 w-full shadow-shade1">
    <div className="flex flex-grow items-center">
      <Brand src="/assets/images/logo.svg" />
      <Spacer size={20} />
      <Label text="Tech on Bitclass" />
      <Spacer size={8} />
      <SearchInput placeholder="Search for live workshop/course " />
    </div>
    <div className="flex justify-between items-center">
      <IconButtonTwoLabel src="/assets/images/logo-apple.svg" title="App store" subtitle="Download on the" />
      <Spacer size={16} />
      <IconButtonTwoLabel src="/assets/images/play.jpeg" title="Google play" subtitle="Get it on" width={30} />
      <Spacer size={10} />

      <HorizontalLine />
      <Spacer size={10} />
      <PrimaryButton label="Log in" />
      <Spacer size={10} />
    </div>
  </nav>
);

export default Navbar;
