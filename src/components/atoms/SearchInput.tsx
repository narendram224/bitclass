import React from 'react';
import { SearchOutline } from 'react-ionicons';

interface SearchInputProps {
    placeholder: string
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }:SearchInputProps): JSX.Element => (
  <div className="">
    <SearchOutline
      color="#00000"
      height="250px"
      width="250px"
    />
    <input type="text" placeholder={placeholder} className="" />
  </div>
);

export default SearchInput;
