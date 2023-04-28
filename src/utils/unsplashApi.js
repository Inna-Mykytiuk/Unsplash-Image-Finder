export const fetchImages = async (query, page = 1) => {
  const KEY = 'wEMe4Xkd-5sh2eLmEuqABK1YZSiAeytPDL3PJCCokLY';
  const MAIN_URL = `https://api.unsplash.com`;

  const response = await fetch(
    `${MAIN_URL}/search/photos?page=${page}&query=${query}&client_id=${KEY}&per_page=12`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
