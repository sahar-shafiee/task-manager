import { FC, ReactNode } from "react";

const Modal: FC<{
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-40 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed top-1/2 left-1/3 w-96 z-40 bg-white mx-auto rounded-md px-2">
        <button className="absolute top-0 left-1 text-2xl" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
