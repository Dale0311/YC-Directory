'use client';

import React from 'react';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { useFormStatus } from 'react-dom';

const SearchFormButton = () => {
  const status = useFormStatus();
  return (
    <Button
      type='submit'
      className={'search-btn text-white'}
      disabled={status.pending}
    >
      <Search className='size-5' />
    </Button>
  );
};

export default SearchFormButton;
