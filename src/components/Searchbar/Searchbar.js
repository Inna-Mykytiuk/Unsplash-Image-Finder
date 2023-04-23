import { useState } from 'react';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
import { Form, FormButton, Label, Input, Header } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

const Searchbar = ({ onSubmit }) => {
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
        />
        <FormButton type="submit">
          <Label>Search</Label>
          <FcSearch size={20} />
        </FormButton>
      </Form>
    </Header>
  );
};
export default Searchbar;
