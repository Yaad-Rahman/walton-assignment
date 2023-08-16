import { XMarkIcon } from "@heroicons/react/24/solid";
import ReactDOM from "react-dom";

import type { ModalType } from "./types";

export const Modal = ({ isOpen, onClose, children, actions }: ModalType) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: "rgba(255,255,255, 0.3)",
      }}
    >
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-1 flex w-full justify-end">
          <button className=" rounded-full bg-gray-300" onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        {children}
        {/* {actions && (
          <div className="mt-6 border-t border-t-primary-50 pt-6">
            {actions}
          </div>
        )} */}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};
