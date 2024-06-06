import clsx from "clsx";
import { FC } from "react";

import { ClassNameWithChildren } from "components/types";

/**
 * Props for the List component.
 * @typedef {Object} ListProps
 * @property {ReactNode} children - The content of the List.
 * @property {'ordered' | 'unordered'} [variant='ordered'] - The type of the List, either 'ordered' (default) or 'unordered'.
 */
interface ListProps extends ClassNameWithChildren {
  variant?: "ordered" | "unordered";
}

/**
 * Props for the ListItem component.
 * @typedef {Object} ListItemProps
 * @property {ReactNode} children - The content of the ListItem.
 */
interface ListItemProps extends ClassNameWithChildren {}

/**
 * List component that renders either an ordered or unordered list based on the variant prop.
 *
 * @param {ListProps} props - The props for the List component.
 * @returns {JSX.Element} The rendered List component.
 *
 * @example
 * <List variant="ordered">
 *   <List.Item>First Item</List.Item>
 *   <List.Item>Second Item</List.Item>
 * </List>
 */
const List: FC<ListProps> & {
  /**
   * ListItem component that renders an item inside a List.
   *
   * @param {ListItemProps} props - The props for the ListItem component.
   * @returns {JSX.Element} The rendered ListItem component.
   *
   * @example
   * <List.Item>Item Content</List.Item>
   */
  Item: FC<ListItemProps>;
} = ({ children, variant = "ordered", className }: ListProps): JSX.Element => {
  const ListTag = variant === "ordered" ? "ol" : "ul";

  return (
    <ListTag
      className={clsx(
        "list",
        {
          "list-disc": variant === "unordered",
          "list-decimal": variant === "ordered",
        },
        className
      )}
    >
      {children}
    </ListTag>
  );
};

const ListItem: FC<ListItemProps> = ({ children, className }) => {
  return (
    <li
      className={clsx(
        "list-item ml-6 first-of-type:mt-2 last-of-type:mb-2 mt-1",
        className
      )}
    >
      <span className="block">{children}</span>
    </li>
  );
};

List.Item = ListItem;

export default List;
