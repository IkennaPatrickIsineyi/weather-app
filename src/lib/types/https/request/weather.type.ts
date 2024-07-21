export type WeatherDataType = { city?: string; zipCode?: string };

export type FetchWeatherDataRequestQuery = {
  appid: string;
  q: string;
};
