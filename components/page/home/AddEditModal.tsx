import { ProductAddEditForm } from "@/components/forms/ProductAddEditForm";
import {
  FormProps,
  ProductAddEditFormType,
} from "@/components/forms/ProductAddEditForm/types";
import { ModalType } from "@/components/ui/Modal/types";
import { Modal, Typography } from "ui";

export const AddEditModal = ({
  product,
  isOpen,
  onClose,
  onSubmit,
}: Pick<ModalType, "isOpen" | "onClose"> &
  FormProps & { product: ProductAddEditFormType | null }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Typography className="mb-10" weight="bold" center size="xl">{`${
        product ? "Edit" : "Add"
      } Product`}</Typography>
      <ProductAddEditForm product={product} onSubmit={onSubmit} />
    </Modal>
  );
};
