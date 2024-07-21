import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_WEATHER_SERVER_BASE_URL}`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.REACT_APP_WEATHER_SERVER_API_TOKEN,
  },
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const apiService = async (url: string, method: string, data?: any) => {
  try {
    const response = await axiosClient({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_WEATHER_SERVER_API_TOKEN,
      },
      data,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return axiosError.response?.data;
    } else {
      return null;
    }
  }
};
export { axiosClient, apiService };
