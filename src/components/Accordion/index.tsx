import clsx from "clsx";
import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

import { ClassNameWithChildren } from "components/types";
import CloseIcon from "jsx:icons/close.svg";
import { useDisclosure, useOutsideClick } from "hooks";

/**
 * Props for the Accordion component.
 * @typedef {Object} AccordionProps
 * @property {ReactNode} children - The content of the Accordion, must include Accordion.Title and Accordion.Body.
 */
interface AccordionProps extends ClassNameWithChildren {
  autoClose?: boolean;
}

/**
 * Props for the AccordionTitle component.
 * @typedef {Object} AccordionTitleProps
 * @property {ReactNode} children - The content of the AccordionTitle.
 */
interface AccordionTitleProps extends ClassNameWithChildren {
  onToggle?: () => void;
  isOpen?: boolean;
}

/**
 * Props for the AccordionBody component.
 * @typedef {Object} AccordionBodyProps
 * @property {ReactNode} children - The content of the AccordionBody.
 */
interface AccordionBodyProps extends ClassNameWithChildren {}

/**
 * Accordion component that acts as a container for Accordion.Title and Accordion.Body.
 *
 * @param {AccordionProps} props - The props for the Accordion component.
 * @returns {JSX.Element} The rendered Accordion component.
 *
 * @example
 * <Accordion>
 *   <Accordion.Title>Title</Accordion.Title>
 *   <Accordion.Body>Body Content</Accordion.Body>
 * </Accordion>
 */
const Accordion: React.FC<AccordionProps> & {
  /**
   * AccordionTitle component used to display the title within a Accordion.
   *
   * @param {AccordionTitleProps} props - The props for the AccordionTitle component.
   * @returns {JSX.Element} The rendered AccordionTitle component.
   *
   * @example
   * <Accordion.Title>Title</Accordion.Title>
   */
  Title: React.FC<AccordionTitleProps>;
  /**
   * AccordionBody component used to display the body content within a Accordion.
   *
   * @param {AccordionBodyProps} props - The props for the AccordionBody component.
   * @returns {JSX.Element} The rendered AccordionBody component.
   *
   * @example
   * <Accordion.Body>Body Content</Accordion.Body>
   */
  Body: React.FC<AccordionBodyProps>;
} = ({
  children,
  className,
  autoClose = false,
}: AccordionProps): JSX.Element => {
  const {isOpen, onClose, onToggle} = useDisclosure(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  useOutsideClick(accordionRef, () => {
    if (isOpen && autoClose) {
      setTimeout(() => onClose(), 100);
    }
  });

  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === AccordionTitle) {
        return cloneElement(child, {
          onToggle: onToggle,
          isOpen: isOpen,
        } as AccordionTitleProps);
      }
      if (child.type === AccordionBody) {
        return (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            {child}
          </motion.div>
        );
      }
    }
    return child;
  });

  return (
    <div ref={accordionRef} className={clsx("p-4", className)}>
      {enhancedChildren}
    </div>
  );
};

const AccordionTitle = ({
  children,
  className,
  onToggle,
  isOpen,
}: AccordionTitleProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "py-2 flex justify-between text-lg items-center",
        className
      )}
      onClick={onToggle}
    >
      {children}
      <CloseIcon
        width={20}
        height={20}
        color="inherit"
        className={clsx("transition-all duration-300", {
          "rotate-[135deg]": !isOpen,
          "rotate-0": isOpen,
        })}
      />
    </div>
  );
};

const AccordionBody = ({
  children,
  className,
}: ClassNameWithChildren): JSX.Element => {
  return <div className={clsx("", className)}>{children}</div>;
};

Accordion.Title = AccordionTitle;

Accordion.Body = AccordionBody;

export default Accordion;
