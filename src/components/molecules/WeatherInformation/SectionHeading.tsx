import Text from "../../atoms/Text";

type Props = {
  label: string;
};
export default function SectionHeading({ label }: Props) {
  return (
    <Text size="body18" weight="semi_bold" color="black">
      {label}
    </Text>
  );
}
