import Text from "../Text";

type Props = {
  label: string;
};
export default function FieldLabel({ label }: Props) {
  return (
    <Text size="body14" weight="normal">
      {label}
    </Text>
  );
}
