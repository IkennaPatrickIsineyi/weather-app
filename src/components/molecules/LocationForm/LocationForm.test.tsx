import {
  fireEvent,
  queryByAttribute,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import App from "../../../App";

const getById = queryByAttribute.bind(null, "id");

test("renders Zip code field", async () => {
  const dom = await act(async () => render(<App />));

  // Find the input field by its id
  const zipcodeInput = getById(dom.container, /zipcode/i);

  expect(zipcodeInput).toBeInTheDocument();

  // Interact with the input field
  await act(async () => userEvent.type(zipcodeInput as Element, "12345"));

  // Assert that the input field has the value number 12345
  expect(zipcodeInput).toHaveValue(12345);
});

test("renders City field", async () => {
  const dom = await act(async () => render(<App />));
  // Find the input field by its id
  const cityInput = getById(dom.container, /city/i);

  expect(cityInput).toBeInTheDocument();
  // Interact with the input field
  await act(async () => userEvent.type(cityInput as Element, "London"));

  // Assert that the input field has the value number 12345
  expect(cityInput).toHaveValue("London");
});

test("renders Form submit button", async () => {
  const dom = await act(async () => render(<App />));
  // Find the input field by its id
  const submitButton = getById(dom.container, /weather_info_button/i);

  expect(submitButton).toBeInTheDocument();
});

test("submits the city and displays weather information", async () => {
  const dom = await act(async () => render(<App />));

  // Get the input field and button
  const cityInput = getById(dom.container, /city/i);
  const submitButton = getById(dom.container, /weather_info_button/i);

  //Type London in the city text field
  fireEvent.change(cityInput as Element, { target: { value: "London" } });
  // Submit form by clicking button
  const res = await act(async () => fireEvent.click(submitButton as Element));

  if (res) {
    // Check if the weather information is displayed after the async op is completed
    expect(screen.getByText(/Weather description/i)).toBeInTheDocument();
    expect(screen.getByText(/Temperature/i)).toBeInTheDocument();
  }
});
