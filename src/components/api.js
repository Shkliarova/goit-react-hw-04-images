import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = "39799799-b8751a2dca689677868dbdc1d";
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  try {
    const params = new URLSearchParams({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    });

    const response = await axios.get(BASE_URL, { params });

    if (response.data.totalHits === 0) {
      toast.error('No images found. Please try again.');
    }

    return response.data.hits;

  } catch (error) {
    toast.error('An error occurred while fetching data. Please try again later.');
  }
}
