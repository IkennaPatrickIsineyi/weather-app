import { PropsWithChildren, useMemo } from "react";
import { ColorPalette } from "../../../lib/types/theme/colors.type";

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
  color?: ColorPalette;
} & PropsWithChildren;

export default function Text({
  children,
  size,
  weight,
  color = "black",
}: Props) {
  const { fontSize, fontWeight } = useMemo(() => {
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

    return { fontSize: fontSizes[size], fontWeight: fontWeights[weight] };
  }, [size, weight]);

  return (
    <p className={`${fontSize} ${fontWeight} text-${color}`}>{children}</p>
  );
}
