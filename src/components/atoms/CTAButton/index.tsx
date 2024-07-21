import { ComponentType, useMemo } from "react";
import IconContainer from "../IconContainer";
import { SpinnerIcon } from "../Icons/Spinner";
import { ColorPalette } from "../../../lib/types/theme/colors.type";

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
  color?: ColorPalette;
  loaderColor?: ColorPalette;
  disabled?: boolean;
  borderColor?: ColorPalette;
  type?: "submit";
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
  borderColor,
  type,
}: Props) {
  const { defaultStyle, radius } = useMemo(() => {
    const radiusMapping: { [K in BorderRadiusType]: string } = {
      sm: "rounded-md",
      md: "rounded-xl",
      lg: "rounded-3xl",
      full: "rounded-full",
    };
    return {
      defaultStyle: `bg-${"red"}-500 hover:bg-${bgcolor}-700 text-${color} border-${borderColor} px-3 py-1`,
      radius: radiusMapping[borderRadius],
    };
  }, [bgcolor, color, borderRadius, borderColor]);

  return (
    <button
      className={`flex items-center gap-1 bg-red-500 hover:bg-red-700 text-white border-red px-3 py-1 rounded-md`}
      disabled={disabled}
      onClick={handleClick}
      id={id}
      type={type}
    >
      {showLoader && (
        <IconContainer
          Icon={SpinnerIcon}
          size="15px"
          mobileSize="15px"
          color="white"
        />
      )}
      {!!StartIcon && (
        <IconContainer
          Icon={StartIcon}
          size="15px"
          mobileSize="15px"
          color={color}
        />
      )}

      <span>{label}</span>

      {!!EndIcon && (
        <IconContainer
          Icon={EndIcon}
          size="15px"
          mobileSize="15px"
          color={color}
        />
      )}
    </button>
  );
}
