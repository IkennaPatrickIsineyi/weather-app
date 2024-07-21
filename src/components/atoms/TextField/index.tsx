import FieldLabel from "../FieldLabel";
import FormErrorText from "../FormErrorText";

type Props = {
  id?: string;
  placeholder?: string;
  type?: "number" | "text" | "password";
  label?: string;
  handleChange: (value: string) => void;
  value?: string;
  error?: string;
};

export default function TextField({
  id,
  placeholder,
  type = "text",
  label,
  handleChange,
  value = "",
  error,
}: Props) {
  return (
    <div className="flex flex-col items-start w-full">
      {!!label && <FieldLabel label={label} />}

      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e.currentTarget.value);
        }}
      ></input>

      {!!error && <FormErrorText error={error} />}
    </div>
  );
}
