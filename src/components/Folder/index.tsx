import clsx from "clsx";
import { ClassNameWithChildren } from "components/types";
import { AnimatePresence, delay, motion } from "framer-motion";
import useDisclosure from "hooks/useDisclosure";
import useOutsideClick from "hooks/useOutsideClick";
import { FC, useRef, useState } from "react";

interface FolderProps extends ClassNameWithChildren {
  folderName?: string;
  folderColor?: string;
}

const Folder: FC<FolderProps> = ({ children, folderColor = "orange", folderName }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useOutsideClick(ref, onClose);

  return (
    <>
      <div
        ref={ref}
        className={clsx("folder relative w-40 h-32 cursor-pointer", {
          "folder-open": isOpen,
        })}
        onClick={onOpen}
      >
        <div
          className="folder absolute folder-back w-full h-32 rounded-t-lg rounded-b-sm"
          style={{
            backgroundColor: folderColor,
            boxShadow: `-1px -1px`,
          }}
        />
        <div
          className={clsx(
            "folder folder-content absolute inset-0 left-4 bg-white w-32 h-32 rounded-sm text-black p-1 text-[4px]",
            {
              "overflow-hidden top-[-15px]": !isOpen,
              "folder-content-open overflow-scroll top-[-500%]": isOpen,
            }
          )}
        >
          {children}
        </div>
        <div
          className={clsx(
            "folder folder-front absolute w-full h-32 rounded-t-lg rounded-b-sm flex items-center text-center justify-center",
            {
              "folder-front-open": isOpen,
            }
          )}
          style={{
            backgroundColor: folderColor,
            boxShadow: `-1px -1px`,
          }}
        >{folderName}</div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={onClose}
            />

            {/* Modal content container */}
            <motion.div
              initial={{ top: "-100%", left: "-10%" }}
              animate={{
                top: "0",
                left: 0,
                transition: {
                  delay: 0.5,
                },
              }}
              exit={{
                top: "-100%",
                left: "-10%",
                transition: {
                  delay: 0,
                },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="z-50 overflow-auto relative bg-white text-black p-5 rounded-md w-[90%] md:w-[70%] h-[80%]"
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Folder;
