type Props = {
  label: string | number;
};

export default function TextValue({ label }: Props) {
  return <p className={`text-sm font-medium text-black`}>{label}</p>;
}
