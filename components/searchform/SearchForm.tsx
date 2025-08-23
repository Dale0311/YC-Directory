import Form from 'next/form';
// import SearchFormReset from "@/components/SearchFormReset";
import SearchFormReset from './SearchFormReset';
import SearchFormButton from './searchform-button';

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action='/' scroll={false} className='search-form'>
      <input
        name='query'
        className='search-input'
        placeholder='Search Startups'
      />

      <div className='flex gap-2'>
        {query && <SearchFormReset />}
        <SearchFormButton />
      </div>
    </Form>
  );
};

export default SearchForm;
