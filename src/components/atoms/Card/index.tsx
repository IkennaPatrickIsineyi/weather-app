import { PropsWithChildren } from "react";

type Props = {} & PropsWithChildren;

export default function Card({ children }: Props) {
  return <div className="shadow-md">{children}</div>;
}
