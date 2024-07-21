import { useQuery } from "@tanstack/react-query";
import { WeatherService } from "../services/weather.service";
import { FetchWeatherDataRequestQuery } from "../types/https/request/weather.type";

const weatherService = new WeatherService();

export const useFetchWeatherData = (data: FetchWeatherDataRequestQuery) => {
  return useQuery({
    queryKey: ["fetch-weather-data"],
    queryFn: ({ pageParam }) => weatherService.fetchWeatherData(data),
    enabled: false,
  });
};
