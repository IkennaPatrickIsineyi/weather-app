import Text from "../../atoms/Text";

type Props = {
  label: string | number;
};

export default function TextValue({ label }: Props) {
  return (
    <Text size="body14" weight="normal" color="black">
      {label}
    </Text>
  );
}
