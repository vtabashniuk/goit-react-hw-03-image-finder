import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";

const getImages = (query, page) => {
  const axiosParams = {
    params: {
      key: "22416794-3b1c3083ab7ce728d60190093",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      page: page,
      per_page: 12,
    },
  };
  return axios
    .get(BASE_URL, axiosParams)
    .then((response) => response.data.hits);
};

export default getImages;
