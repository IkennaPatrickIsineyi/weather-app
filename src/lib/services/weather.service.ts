import { axiosClient } from "../axios/client";
import { FetchWeatherDataRequestQuery } from "../types/https/request/weather.type";
import { FetchWeatherDataResponse } from "../types/https/response/weather.type";

export class WeatherService {
  fetchWeatherData = async (data: FetchWeatherDataRequestQuery) =>
    await axiosClient
      .get<any, FetchWeatherDataResponse>(
        `/data/2.5/weather?q=${data.q}&appid=${data.appid}`
      )
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
}
