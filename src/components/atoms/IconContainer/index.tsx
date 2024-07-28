import { ComponentType, useMemo } from "react";
import { FullColorPalette } from "../../../lib/types/theme/colors.type";

type Props = {
  Icon: ComponentType<any>;
  size: number;
  mobileSize: number;
  color?: FullColorPalette;
};

export default function IconContainer({
  Icon,
  size,
  mobileSize,
  color,
}: Props) {
  const { fullClass } = useMemo(() => {
    return {
      fullClass: `w-${mobileSize} sm:w-${size} h-${mobileSize} sm:h-${size}`,
    };
  }, [mobileSize, size]);

  return (
    <div className={`${fullClass}`}>
      <Icon style={{ width: "100%", height: "100%", color }} />
    </div>
  );
}
