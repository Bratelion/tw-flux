import { Children, FC, ReactElement, cloneElement, isValidElement, useRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { ClassNameWithChildren } from "components/types";
import { useDisclosure, useOutsideClick } from "hooks";
import ChevronIcon from "jsx:icons/down.svg";

/**
 * Props for the Dropdown component.
 * @typedef {Object} DropdownProps
 * @property {ReactNode} children - The content of the Dropdown.
 * @property {string} [className] - Additional classes for the Dropdown.
 */
interface DropdownProps extends ClassNameWithChildren {
    buttonClassName?: string;
}

/**
 * Props for the DropdownName component.
 * @typedef {Object} DropdownNameProps
 * @property {React.ReactNode} children - The content of the DropdownName.
 * @property {string} [className] - Additional classes for the DropdownName.
 */
interface DropdownNameProps extends ClassNameWithChildren {}

/**
 * Props for the DropdownItem component.
 * @typedef {Object} DropdownItemProps
 * @property {ReactNode} children - The content of the DropdownItem.
 * @property {string} [className] - Additional classes for the DropdownItem.
 */
interface DropdownItemProps extends ClassNameWithChildren {}

/**
 * Dropdown component that acts as a container for Dropdown.Item.
 *
 * @param {DropdownProps} props - The props for the Dropdown component.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
const Dropdown: FC<DropdownProps> & {
  /**
   * DropdownName component used to display the name of the Dropdown.
   *
   * @param {DropdownNameProps} props - The props for the DropdownName component.
   * @returns {JSX.Element} The rendered DropdownName component.
   *
   * @example
   * <Dropdown.Name>My Dropdown</Dropdown.Name>
   */
  Name: FC<DropdownNameProps>;
  /**
   * DropdownItem component used to display an item within a Dropdown.
   *
   * @param {DropdownItemProps} props - The props for the DropdownItem component.
   * @returns {JSX.Element} The rendered DropdownItem component.
   *
   * @example
   * <Dropdown.Item>Item Content</Dropdown.Item>
   */
  Item: FC<DropdownItemProps>;
} = ({ children, className, buttonClassName }: DropdownProps): JSX.Element => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, onClose);

  const nameChild = Children.toArray(children).find(
    (child) => isValidElement(child) && (child as ReactElement).type === DropdownName
  );

  const items = Children.toArray(children).filter(
    (child) => !(isValidElement(child) && (child as ReactElement).type === DropdownName)
  );

  return (
    <div className={clsx("relativeborder-[1px] border-black max-w-max", className)} ref={ref}>
      <button onClick={onToggle} className={clsx("flex items-center gap-4 p-2", buttonClassName)}>
        {nameChild ? cloneElement(nameChild as ReactElement) : 'Toggle Dropdown'}
        <ChevronIcon width={20}
        height={20}
        color="inherit"
        className={clsx("transition-all duration-300", {
          "rotate-0": !isOpen,
          "rotate-180": isOpen,
        })}/>
      </button>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        {items}
      </motion.div>
    </div>
  );
};

const DropdownName: FC<DropdownNameProps> = ({ children, className }) => {
    return <span className={clsx(className)}>{children}</span>;
  };

const DropdownItem: FC<DropdownItemProps> = ({ children, className }) => {
  return <div className={clsx("", className)}>{children}</div>;
};

Dropdown.Name = DropdownName;
Dropdown.Item = DropdownItem;

export default Dropdown;
