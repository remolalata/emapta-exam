import React, { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import useModal from "~hooks/useModal";

type ModalProps = {
  modalKey: string;
  title?: string;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ modalKey, title, children }) => {
  const { isOpen, handleClose } = useModal(modalKey);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative bg-white w-[80%] mx-auto rounded-lg shadow-lg p-6">
        {title && (
          <div className="flex justify-end items-center pb-3 mb-4">
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