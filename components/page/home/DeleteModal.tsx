import { ProductAddEditForm } from "@/components/forms/ProductAddEditForm";
import {
  FormProps,
  ProductAddEditFormType,
} from "@/components/forms/ProductAddEditForm/types";
import { ModalType } from "@/components/ui/Modal/types";
import { Modal, Typography } from "ui";

export const DeleteModal = ({
  deleteProduct,
  isOpen,
  onClose,
  onDelete,
}: Pick<ModalType, "isOpen" | "onClose"> & {
  deleteProduct: { id: number; name: string } | null;
  onDelete: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Typography center className="mt-5">
        Are you sure to delete {deleteProduct?.name}?
      </Typography>
      <div className="flex gap-8 mt-10 justify-center">
        <button
          onClick={onClose}
          className="text-white bg-gray-500 hover:bg-gray-700 rounded-lg px-8 py-4"
        >
          Cancel
        </button>
        <button
          onClick={onDelete}
          className="text-white bg-red-500 hover:bg-red-700 rounded-lg px-8 py-4"
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
};
