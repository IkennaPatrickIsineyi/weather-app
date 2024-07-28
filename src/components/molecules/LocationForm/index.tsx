import { FormikProps } from "formik";
import { WeatherDataType } from "../../../lib/types/https/request/weather.type";
import TextField from "../../atoms/TextField";
import CTAButton from "../../atoms/CTAButton";
import Text from "../../atoms/Text";
import Grid from "../../atoms/Grid";

type Props = {
  formik: FormikProps<WeatherDataType>;
  isSubmitting?: boolean;
};

export default function LocationForm({ formik, isSubmitting }: Props) {
  return (
    <div className="mx-auto">
      <form>
        <div className="flex flex-col items-start justify-center mx-auto shadow-md px-4 py-4 gap-3">
          <p className={`text-sm font-medium text-black text-center`}>
            Please enter a valid zip code or city
          </p>
          <TextField
            id="zipcode"
            placeholder="Enter zipcode"
            type="number"
            handleChange={(value) => {
              formik.setFieldValue("zipCode", value);
            }}
            value={formik.values.zipCode}
            error={formik.errors.zipCode}
          />

          <TextField
            id="city"
            placeholder="Enter city"
            type="text"
            handleChange={(value) => {
              formik.setFieldValue("city", value);
            }}
            value={formik.values.city}
            error={formik.errors.city}
          />

          <Text size="body12" weight="bold" color="green">
            4-column Grid heading
          </Text>

          <Grid rowGap={{ xs: 5 }} colGap={{ xs: 5 }} cols={{ xs: 4 }}>
            <Text size="body20" weight="bold">
              Big bold text
            </Text>

            <Text size="body12" weight="bold">
              Small bold text
            </Text>

            <Text size="body12" weight="light">
              Small light text
            </Text>

            <Text size="body12" weight="bold" color="green">
              Small green medium text
            </Text>

            {Array.from({ length: 3 }).map((item, index) => {
              return (
                <Text
                  key={"item-" + index}
                  size="body12"
                  weight="bold"
                  color="green"
                >
                  item {1}
                </Text>
              );
            })}
          </Grid>

          <div className="flex items-center justify-between">
            <CTAButton
              label="Search"
              type="submit"
              id="weather_info_button"
              bgcolor="red"
              hoverColor="blue"
              color="white"
              borderRadius="lg"
              paddingY={2}
              paddingX={5}
              handleClick={formik.handleSubmit}
              showLoader={isSubmitting}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
