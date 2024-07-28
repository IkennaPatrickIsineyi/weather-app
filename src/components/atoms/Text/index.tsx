import { PropsWithChildren, useMemo } from "react";
import {
  ColorPalette,
  FullColorPalette,
  TextColorPalette,
} from "../../../lib/types/theme/colors.type";

export type TextFontSizeType =
  | "body12"
  | "body14"
  | "body16"
  | "body18"
  | "body20"
  | "body24"
  | "body36";

export type TextFontWeightType = "light" | "normal" | "bold" | "semi_bold";

type Props = {
  size: TextFontSizeType;
  weight: TextFontWeightType;
  color?: FullColorPalette;
} & PropsWithChildren;

export default function Text({
  children,
  size,
  weight,
  color = "black",
}: Props) {
  const { fontSize, fontWeight, textColor } = useMemo(() => {
    const fontWeights: { [K in TextFontWeightType]: string } = {
      light: "font-normal",
      normal: "font-medium",
      semi_bold: "font-semibold",
      bold: "font-bold",
    };

    const fontSizes: { [K in TextFontSizeType]: string } = {
      body12: "text-xs",
      body14: "text-sm",
      body16: "text-base",
      body18: "text-lg",
      body20: "text-xl",
      body24: "text-2xl",
      body36: "text-4xl",
    };

    return {
      fontSize: fontSizes[size],
      fontWeight: fontWeights[weight],
      textColor: `text-${color}-600`,
    };
  }, [size, weight, color]);

  return <p className={`${fontSize} ${fontWeight} ${textColor}`}>{children}</p>;
}
