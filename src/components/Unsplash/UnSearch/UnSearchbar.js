// import { useContext, useState } from 'react';
// import { toast } from 'react-toastify';
// import { Form, FormButton, Label, Input, Header } from './UnSearchbar.styled';
// import { FcSearch } from 'react-icons/fc';
// import { ImageContext } from '../UnsplashGallery/UnsplashGallery';

// const KEY = 'wEMe4Xkd-5sh2eLmEuqABK1YZSiAeytPDL3PJCCokLY';

// export const Searchbar = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const { fetchData, setSearchImage } = useContext(ImageContext);

//   const handleInputChange = e => {
//     setSearchValue(e.target.value);
//   };
//   const handleButtonSearch = () => {
//     fetchData(`search/photos?page=1&query=${searchValue}&client_id=${KEY}`);
//     if (!searchValue.trim()) {
//       return toast.warning('please type something');
//     }
//     setSearchValue('');
//     setSearchImage(searchValue);
//   };
//   const handleEnterSearch = e => {
//     if (e.key === 'Enter') {
//       fetchData(`search/photos?page=1&query=${searchValue}&client_id=${KEY}`);
//       setSearchValue('');
//       setSearchImage(searchValue);
//     }
//   };

//   return (
//     <Header>
//       <Form>
//         <Input
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={searchValue}
//           onChange={handleInputChange}
//           onKeyDown={handleEnterSearch}
//         />
//         <FormButton onClick={handleButtonSearch} disabled={!searchValue}>
//           <Label>Search</Label>
//           <FcSearch size={20} />
//         </FormButton>
//       </Form>
//     </Header>
//   );
// };

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
