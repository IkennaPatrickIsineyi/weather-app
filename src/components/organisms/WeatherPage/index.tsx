import { useFormik } from "formik";
import LocationForm from "../../molecules/LocationForm";
import WeatherInformation from "../../molecules/WeatherInformation";
import {
  initWeatherDataDetails,
  weatherDataSchema,
} from "../../../lib/schemas/weather.schema";
import { useFetchWeatherData } from "../../../lib/hooks/weather.hook";
import FormErrorText from "../../atoms/FormErrorText";

export default function WeatherPage() {
  const handleSubmit = () => {
    refetch();
  };

  const formik = useFormik({
    initialValues: initWeatherDataDetails,
    enableReinitialize: true,
    validateOnMount: false,
    validationSchema: weatherDataSchema,
    onSubmit: handleSubmit,
  });

  const { data, isFetching, isRefetching, refetch, error } =
    useFetchWeatherData({
      appid: process.env.REACT_APP_WEATHER_SERVER_API_TOKEN || "",
      q: `${formik.values.city || ""},${formik.values.zipCode}`,
    });

  const getErrorMessage = (message: string) => {
    if (message.includes("404")) return "Location was not found";
    return message;
  };

  const inProgress = isRefetching || isFetching;
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] gap-4">
      <p className={`text-2xl font-bold text-center mb-2 text-black`}>
        Welcome to the weather app
      </p>
      <LocationForm formik={formik} isSubmitting={inProgress} />
      {!!error && !inProgress && (
        <FormErrorText error={getErrorMessage(error.message)} />
      )}
      {!error && <WeatherInformation result={data} fetching={inProgress} />}
    </div>
  );
}
