import { ComponentType, useMemo } from "react";
import IconContainer from "../IconContainer";
import { SpinnerIcon } from "../Icons/Spinner";
import {
  ColorPalette,
  FullColorPalette,
  TextColorPalette,
} from "../../../lib/types/theme/colors.type";

type BorderRadiusType = "sm" | "md" | "lg" | "full";

type Props = {
  StartIcon?: ComponentType<any>;
  EndIcon?: ComponentType<any>;
  label?: string;
  id?: string;
  handleClick: () => void;
  showLoader?: boolean;
  borderRadius?: BorderRadiusType;
  bgcolor?: ColorPalette;
  color?: TextColorPalette;
  loaderColor?: FullColorPalette;
  disabled?: boolean;
  hoverColor?: ColorPalette;
  type?: "submit";
  paddingX?: number;
  paddingY?: number;
};

export default function CTAButton({
  showLoader,
  StartIcon,
  EndIcon,
  label,
  handleClick,
  borderRadius = "sm",
  id,
  bgcolor = "blue",
  color = "white",
  loaderColor,
  disabled,
  hoverColor,
  paddingX = 3,
  paddingY = 1,
  type,
}: Props) {
  const { bgc, hover, text, px, py, radius } = useMemo(() => {
    const radiusMapping: { [K in BorderRadiusType]: string } = {
      sm: "rounded-md",
      md: "rounded-xl",
      lg: "rounded-3xl",
      full: "rounded-full",
    };
    return {
      radius: radiusMapping[borderRadius],
      bgc: `bg-${bgcolor}-500`,
      hover: `lg:hover:bg-${hoverColor}-500`,
      text: `text-${color}`,
      px: `px-${paddingX}`,
      py: `py-${paddingY}`,
    };
  }, [bgcolor, hoverColor, color, borderRadius, paddingX, paddingY]);

  return (
    <button
      className={`flex items-center gap-1 ${bgc} ${hover} ${text} ${px} ${py} ${radius}`}
      disabled={disabled}
      onClick={handleClick}
      id={id}
      type={type}
    >
      {showLoader && (
        <IconContainer
          Icon={SpinnerIcon}
          size={4}
          mobileSize={4}
          color={loaderColor || color}
        />
      )}
      {!!StartIcon && (
        <IconContainer Icon={StartIcon} size={4} mobileSize={4} color={color} />
      )}

      <span>{label}</span>

      {!!EndIcon && (
        <IconContainer Icon={EndIcon} size={4} mobileSize={4} color={color} />
      )}
    </button>
  );
}
