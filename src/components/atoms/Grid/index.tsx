import { PropsWithChildren, useMemo } from "react";

type ColumnType = "1" | "2" | "3";
type Props = {
  columns: ColumnType;
  gaps: number;
} & PropsWithChildren;

export default function Grid({ children, columns, gaps }: Props) {
  const columnMapping = {
    "1": "grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1",
    "2": "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2",
    "3": "grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3",
  };

  /*   const { cols, gap } = useMemo(() => {
    return {
      cols: `sm:grid-cols-${columns.sm} md:grid-cols-${columns.md} lg:grid-cols-${columns.lg}`,
      gap: `sm:gap-[${gaps.sm}] md:gap-[${gaps.md}] lg:gap-[${gaps.lg}]`,
    };
  }, [columns, gaps]); */

  return <div className={columnMapping[columns]}>{children}</div>;
}
