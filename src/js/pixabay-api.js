import axios from 'axios';


export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
  const axiosOptions = {
    params: {
      key: '48264002-554f1b79d0a5e107f7aa1f349',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: currentPage,
    },
  };
  return axios.get(`https://pixabay.com/api/`, axiosOptions);
};
