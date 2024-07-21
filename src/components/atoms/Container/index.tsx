import { PropsWithChildren } from "react";

type Props = {
  variant?: "sm" | "md" | "lg";
} & PropsWithChildren;

export default function Container({ variant = "lg", children }: Props) {
  return <div className={`max-w-[80%] mx-auto`}>{children}</div>;
}
