import Text from "../Text";

type Props = {
  error: string;
};

export default function FormErrorText({ error }: Props) {
  return (
    <Text size="body12" weight="normal" color="red">
      {error}
    </Text>
  );
}
