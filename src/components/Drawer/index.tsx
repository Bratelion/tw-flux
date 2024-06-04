import clsx from "clsx";
import { Children, cloneElement, isValidElement, useState } from "react";

import { ClassNameWithChildren } from "components/types";
import CloseIcon from 'jsx:icons/close.svg';

/**
 * Props for the Drawer component.
 * @typedef {Object} DrawerProps
 * @property {ReactNode} children - The content of the Drawer, must include Drawer.Title and Drawer.Body.
 */
interface DrawerProps extends ClassNameWithChildren {}

/**
 * Props for the DrawerTitle component.
 * @typedef {Object} DrawerTitleProps
 * @property {ReactNode} children - The content of the DrawerTitle.
 */
interface DrawerTitleProps extends ClassNameWithChildren {
  onToggle?: () => void;
  isOpen?: boolean;
}

/**
 * Props for the DrawerBody component.
 * @typedef {Object} DrawerBodyProps
 * @property {ReactNode} children - The content of the DrawerBody.
 */
interface DrawerBodyProps extends ClassNameWithChildren {}

/**
 * Drawer component that acts as a container for Drawer.Title and Drawer.Body.
 * Throws an error if Drawer.Title or Drawer.Body are missing.
 *
 * @param {DrawerProps} props - The props for the Drawer component.
 * @returns {JSX.Element} The rendered Drawer component.
 * @throws Will throw an error if Drawer.Title or Drawer.Body are not present.
 *
 * @example
 * <Drawer>
 *   <Drawer.Title>Title</Drawer.Title>
 *   <Drawer.Body>Body Content</Drawer.Body>
 * </Drawer>
 */
const Drawer: React.FC<DrawerProps> & {
  /**
   * DrawerTitle component used to display the title within a Drawer.
   *
   * @param {DrawerTitleProps} props - The props for the DrawerTitle component.
   * @returns {JSX.Element} The rendered DrawerTitle component.
   *
   * @example
   * <Drawer.Title>Title</Drawer.Title>
   */
  Title: React.FC<DrawerTitleProps>;
  /**
   * DrawerBody component used to display the body content within a Drawer.
   *
   * @param {DrawerBodyProps} props - The props for the DrawerBody component.
   * @returns {JSX.Element} The rendered DrawerBody component.
   *
   * @example
   * <Drawer.Body>Body Content</Drawer.Body>
   */
  Body: React.FC<DrawerBodyProps>;
} = ({ children, className }: DrawerProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log('toggleVisibility ', isVisible);
  };

  const enhancedChildren = Children.map(children, child => {
    if (isValidElement(child)) {
      if (child.type === DrawerTitle) {
        return cloneElement(child, { onToggle: toggleVisibility, isOpen: isVisible } as DrawerTitleProps);
      }
      if (child.type === DrawerBody) {
        return isVisible ? child : null;
      }
    }
    return child;
  });

  return (
    <div className={clsx("p-4", className)}>
      {enhancedChildren}
    </div>
  );
};

/**
 * DrawerTitle component used to display the title within a Drawer.
 *
 * @param {DrawerTitleProps} props - The props for the DrawerTitle component.
 * @returns {JSX.Element} The rendered DrawerTitle component.
 *
 * @example
 * <Drawer.Title>Title</Drawer.Title>
 */
const DrawerTitle = ({ children, className, onToggle, isOpen }: DrawerTitleProps): JSX.Element => {
  return <div className={clsx("py-2 flex justify-between text-lg items-center", className)} onClick={onToggle}>
    {children}
    <CloseIcon width={20} height={20} color="inherit" className={clsx('transition-all duration-300',{
      "rotate-[135deg]": !isOpen,
      "rotate-0": isOpen
    })}/>
    </div>;
};

/**
 * DrawerBody component used to display the body content within a Drawer.
 *
 * @param {DrawerBodyProps} props - The props for the DrawerBody component.
 * @returns {JSX.Element} The rendered DrawerBody component.
 *
 * @example
 * <Drawer.Body>Body Content</Drawer.Body>
 */
const DrawerBody = ({ children, className }: ClassNameWithChildren): JSX.Element => {
  return <div className={clsx("drawer-body", className)}>{children}</div>;
};

Drawer.Title = DrawerTitle;

Drawer.Body = DrawerBody;

export default Drawer;
