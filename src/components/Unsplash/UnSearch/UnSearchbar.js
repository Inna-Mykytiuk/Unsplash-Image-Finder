import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, FormButton, Label, Input, Header } from './UnSearchbar.styled';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!query.trim()) {
      return toast.warning('please type something');
    }

    onSubmit(query);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChange}
          // onKeyDown={handleEnterSearch}
        />
        <FormButton type="submit">
          <Label>Search</Label>
          <FcSearch size={20} />
        </FormButton>
      </Form>
    </Header>
  );
};
