import { FullColorPalette } from "../../../lib/types/theme/colors.type";
import Text from "../Text";

type Props = {
  label: string;
  color?: FullColorPalette;
};

export default function FieldLabel({ label, color }: Props) {
  return (
    <Text size="body14" weight="normal" color={color}>
      {label}
    </Text>
  );
}
