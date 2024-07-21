type Props = {
  error: string;
};

export default function FormErrorText({ error }: Props) {
  return <p className={`text-xs font-medium text-red-500`}>{error}</p>;
}
