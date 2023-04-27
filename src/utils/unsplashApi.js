// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export const useAxios = param => {
//   const [response, setResponse] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   axios.defaults.baseURL = 'https://api.unsplash.com';

//   const fetchData = async url => {
//     try {
//       setIsLoading(true);
//       const res = await axios(url);
//       setResponse(res.data.results);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(param);
//   }, [param]);

//   return {
//     response,
//     isLoading,
//     error,
//     fetchData: url => fetchData(url),
//   };
// };
//
// fetchData(`search/photos?page=1&query=${searchValue}&client_id=${KEY}`);

// export async function fetchImages(query, page = 1) {
//   const KEY = 'wEMe4Xkd-5sh2eLmEuqABK1YZSiAeytPDL3PJCCokLY';
//   const MAIN_URL = `https://api.unsplash.com`;
//   const response = await fetch(
//     `${MAIN_URL}/search/photos?q=${query}&client_id=${KEY}&page=${page}&per_page=12`
//   );
//   return await response.json();
// }

export const fetchImages = async (query, page = 1) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=wEMe4Xkd-5sh2eLmEuqABK1YZSiAeytPDL3PJCCokLY&per_page=12`
  );
  const data = await response.json();
  console.log(data);
};

fetchImages('cat', 1);
