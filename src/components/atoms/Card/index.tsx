import { CSSProperties, PropsWithChildren } from "react";

type Props = {
  style?: CSSProperties;
} & PropsWithChildren;

export default function Card({ children, style }: Props) {
  return (
    <div className="shadow-md" style={style}>
      {children}
    </div>
  );
}
