import React, { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import useModal from "~hooks/useModal";

type ModalProps = {
  modalKey: string;
  title?: string;
  children: ReactNode;
  size?: "lg" | "md" | "sm";
};

const Modal: React.FC<ModalProps> = ({ modalKey, title, children, size = "lg" }) => {
  const { isOpen, handleClose } = useModal(modalKey);

  if (!isOpen) return null;

  const sizeClasses = {
    lg: "md:w-[80%]",
    md: "md:w-[60%]",
    sm: "md:w-[40%]",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-80" onClick={handleClose}></div>
      <div className={`relative bg-white w-[80%] ${sizeClasses[size]} mx-auto rounded-lg shadow-lg p-6`}>
        {title && (
          <div className="flex justify-end items-center">
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;