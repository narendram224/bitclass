import React from 'react';
import Brand from '../atoms/Brand';
import Label from '../atoms/Label';

const Navbar :React.FC = (): JSX.Element => (

  <nav className="flex justify-between items-center px-4 py-8  fixed top-0 left-0 w-full">
    <Brand src="/assets/images/logo.svg" />
    <Label text="Tech on Bitclass" />
  </nav>
);

export default Navbar;
