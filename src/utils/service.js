import axios from 'axios';

export const fetchImages = async (query, page = 1) => {
  const KEY = '32967764-6cff543b680aa07e982292422';
  const MAIN_URL = `https://pixabay.com/api/`;
  try {
    const response = await axios.get(MAIN_URL, {
      params: {
        key: KEY,
        q: query,
        page: page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
