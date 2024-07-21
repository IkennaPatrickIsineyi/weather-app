import { WeatherDataType } from "../types/https/request/weather.type";

import * as yup from "yup";

export const weatherDataSchema: yup.ObjectSchema<WeatherDataType> = yup
  .object()
  .shape({
    city: yup.string().when("zipCode", {
      is: (zipCode?: string) => !zipCode,
      then: () => {
        return yup.string().required("Enter city or zip code");
      },
    }),
    zipCode: yup.string(),
  });

export const initWeatherDataDetails: WeatherDataType = {
  city: "",
  zipCode: "",
};
