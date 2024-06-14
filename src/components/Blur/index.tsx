import clsx from "clsx";
import { FC } from "react";

import Blob from './Blob'
import { ClassNameWithChildren } from "components/types";

/**
 * Props for the Blur component.
 * @typedef {Object} BlurProps
 * @property {React.ReactNode} children - The content to be rendered inside the Blur component.
 * @property {string} [className] - Additional classes for the Blur component.
 * @property {number} [blobs=3] - The number of blobs to be displayed.
 * @property {string} [blobClassName] - Additional classes for each Blob component.
 */
interface BlurProps extends ClassNameWithChildren {
    blobs?: number;
    blobClassName?: string;
    blobColors?: string[];
}

/**
 * Blur component that displays moving blurred blobs in the background.
 * 
 * @param {BlurProps} props - The props for the Blur component.
 * @returns {JSX.Element} The rendered Blur component.
 * 
 * @example
 * <Blur blobs={5} blobClassName="custom-blob-class">
 *   <div>Your content here</div>
 * </Blur>
 */
const Blur: FC<BlurProps> = ({ children, className, blobs = 3, blobClassName, blobColors }) => {
  return (
    <div
      className={clsx(
        "relative",
        className
      )}
    >
      <div className="absolute w-full h-full top-0 left-0 z-0">
    {Array.from({ length: blobs }).map((_, i) => (
      <Blob key={i} className={blobClassName} blobColors={blobColors} />
    ))}
      </div>
      <div className="z-[1]">
      {children}
      </div>
    </div>
  );
};

export default Blur;
