import clsx from "clsx";
import { ClassNameWithChildren } from "components/types";
import { FC } from "react";

interface LinkProps extends ClassNameWithChildren {
  variant?: "default" | "inline";
  href: URL | string;
}

const Link: FC<LinkProps> = ({
  children,
  variant = "default",
  className,
  href,
}: LinkProps): JSX.Element => {
  return (
    <a
      href={href.toString()}
      className={clsx(
        "hover:cursor-pointer underline underline-offset-2",
        {
          "p-2 pl-0": variant === "default",
          "p-0 inline": variant === "inline",
        },
        className
      )}
    >
      {children}
    </a>
  );
};

export default Link;
