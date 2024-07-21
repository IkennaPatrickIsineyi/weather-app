import { ComponentType } from "react";
import { ColorPalette } from "../../../lib/types/theme/colors.type";

type Props = {
  Icon: ComponentType<any>;
  size: string;
  mobileSize: string;
  color?: ColorPalette;
};
export default function IconContainer({
  Icon,
  size,
  mobileSize,
  color,
}: Props) {
  return (
    <div
      className={`w-[${mobileSize}] sm:w-[${size}] h-[${mobileSize}] sm:h-[${size}]`}
    >
      <Icon style={{ width: "100%", height: "100%", color }} />
    </div>
  );
}
