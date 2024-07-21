type Props = {
  label: string;
};
export default function SectionHeading({ label }: Props) {
  return <p className={`text-lg font-semibold text-black`}>{label}</p>;
}
