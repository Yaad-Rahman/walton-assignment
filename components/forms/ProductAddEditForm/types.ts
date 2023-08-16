import { ProductType } from "@/types/productType";

export type ProductAddEditFormType = Pick<
  ProductType,
  "title" | "price" | "rating" | "stock"
> & { id?: number };

export type FormProps = {
  product: Omit<ProductAddEditFormType, "id"> | null | undefined;
  onSubmit: (
    values: Omit<ProductAddEditFormType, "id">,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => void;
};
