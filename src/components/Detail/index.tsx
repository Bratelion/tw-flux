import clsx from "clsx";
import { ClassNameWithChildren } from "components/types";
import { FC } from "react";

interface DetailProps extends ClassNameWithChildren {
  align?: "left" | "right" | "center";
}

const Detail: FC<DetailProps> = ({ children, className, align = "left" }) => {
  return (
    <div className={clsx(className)}>
      <div
        className={clsx("relative m-[2px] h-[1px] bg-white", {
          "after:w-1 after:h-1 after:absolute after:mt-[-1.5px] after:rounded-full after:bg-white": true,
            "before:w-1 before:h-1 before:absolute before:mt-[-1.5px] before:rounded-full before:bg-white":
            align === "center",
            "after:left-0 before:right-0": align === "center",
          "after:left-0": align === "right",
          "after:right-0": align === "left",
        })}
      />
      <div
        className={clsx("mt-2", {
          "pr-16": align === "left",
          "pl-16": align === "right",
          "px-16": align === "center",
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Detail;
