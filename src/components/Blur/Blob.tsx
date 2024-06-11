import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Generate a random number between min and max.
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random number between min and max.
 */
const random = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

/**
 * Blob component that displays a moving blurred blob.
 *
 * @param {Object} props - The props for the Blob component.
 * @param {string} [props.className] - Additional classes for the Blob component.
 * @returns {JSX.Element} The rendered Blob component.
 *
 * @example
 * <Blob className="custom-blob-class" />
 */
const Blob = ({ className, blobColors }: { className?: string, blobColors?:string[] }): JSX.Element => {
  const controls = useAnimation();
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentElement = blobRef.current?.parentElement;

    if (!parentElement) return;

    const { width, height } = parentElement.getBoundingClientRect();

    const animateBlob = () => {
      controls.start({
        x: [
          random(0, width - 256),
          random(0, width - 256),
          random(0, width - 256),
          random(0, width - 256),
        ],
        y: [
          random(0, height - 256),
          random(0, height - 256),
          random(0, height - 256),
          random(0, height - 256),
        ],
        z: [0, random(5, 10), random(0, 5), random(5, 10)],
        transition: {
          duration: random(10, 50),
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      });
    };

    animateBlob();
  }, [controls]);

  return (
    <motion.div
      ref={blobRef}
      className={clsx(
        "absolute w-64 h-64 bg-black opacity-30 rounded-full filter blur-[42px]",
        className
      )}
      style={{
        backgroundColor: blobColors?.[Math.floor(random(0, blobColors?.length))] || ''
      }}
      animate={controls}
    />
  );
};

export default Blob;
