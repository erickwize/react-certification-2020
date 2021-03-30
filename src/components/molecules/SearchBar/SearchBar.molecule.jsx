import React from 'react';
import { Button, Form, Input, SearchContainer, SearchIcon } from './SearchBar.styles';

const SearchBar = () => {
  return (
    <SearchContainer>
      <Form>
        <Input type="text" id="name" placeholder="Ask for a video..." />
        <Button>
          <SearchIcon />
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default SearchBar;
