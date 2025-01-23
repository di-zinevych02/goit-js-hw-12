import axios from 'axios';


export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    key: '48264002-554f1b79d0a5e107f7aa1f349',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return axios.get(`https://pixabay.com/api/?${searchParams}`);
};
