import { ReactNode } from "react";

type StaggerContainerProps = {
  children: ReactNode;
};

export default function StaggerContainer({ children }: StaggerContainerProps) {
  return <div>{children}</div>;
}
