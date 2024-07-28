import { PropsWithChildren, useMemo } from "react";

type ColTypeKeys = "xs" | "sm" | "md" | "lg";

type Props = {
  cols: { [k in ColTypeKeys]?: number };
  rowGap: { [k in ColTypeKeys]?: number };
  colGap: { [k in ColTypeKeys]?: number };
} & PropsWithChildren;

export default function Grid({ children, cols, colGap, rowGap }: Props) {
  const { colClass, rowGapClass, colGapClass } = useMemo(() => {
    return {
      colClass: `grid-cols-${cols.xs || 1} ${
        cols.sm ? "sm:grid-cols-" + cols.sm : ""
      }  ${cols.md ? "md:grid-cols-" + cols.md : ""} ${
        cols.lg ? "lg:grid-cols-" + cols.lg : ""
      }`,
      rowGapClass: `${rowGap.xs ? "gap-y-" + rowGap.xs : ""} ${
        rowGap.sm ? "gap-y-" + rowGap.sm : ""
      } ${rowGap.md ? "gap-y-" + rowGap.md : ""} ${
        rowGap.lg ? "gap-y-" + rowGap.lg : ""
      }`,
      colGapClass: `${colGap.xs ? "gap-x-" + colGap.xs : ""} ${
        colGap.sm ? "gap-x-" + colGap.sm : ""
      } ${colGap.md ? "gap-x-" + colGap.md : ""} ${
        colGap.lg ? "gap-x-" + colGap.lg : ""
      }`,
    };
  }, [cols, colGap, rowGap]);

  return (
    <div className={`grid ${colClass} ${colGapClass} ${rowGapClass}`}>
      {children}
    </div>
  );
}
