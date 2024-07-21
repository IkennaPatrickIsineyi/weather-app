import { FetchWeatherDataResponse } from "../../../lib/types/https/response/weather.type";
import IconContainer from "../../atoms/IconContainer";
import { SpinnerIcon } from "../../atoms/Icons/Spinner";
import SectionHeading from "./SectionHeading";
import TextValue from "./TextValue";

type Props = {
  result?: FetchWeatherDataResponse;
  fetching?: boolean;
};

export default function WeatherInformation({ result, fetching }: Props) {
  const weather = result && result.weather[0];
  return (
    <div className="flex flex-col items-center justify-center gap-3 mx-auto">
      {fetching && (
        <IconContainer
          Icon={SpinnerIcon}
          size="30px"
          mobileSize="30px"
          color="red"
        />
      )}

      {!!result && !fetching && (
        <div className="flex flex-col items-start justify-center gap-3">
          <p className={`text-xl font-bold text-center text-black`}>
            Weather Information for {result.name}
          </p>

          {/* Temperature */}
          <div className="flex flex-col items-start justify-center ">
            <SectionHeading label="Temperature" />
            <TextValue label={(result.main.temp / 10).toFixed(1) || ""} />
          </div>

          {/* Weather description */}
          <div className="flex flex-col items-start justify-center ">
            <SectionHeading label="Weather description" />

            <div className="flex items-center justify-start gap-1">
              <TextValue label={weather?.description || ""} />
              <img
                src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
                alt="weather"
                className="object-cover object-left-top h-9 w-9"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
