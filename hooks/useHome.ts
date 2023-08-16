import { createProduct, removeProduct, updateProduct } from "@/api/productApi";
import { ProductAddEditFormType } from "@/components/forms/ProductAddEditForm/types";
import { ProductType } from "@/types/productType";
import { useState } from "react";
import { toast } from "react-toastify";

export const useHome = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteProduct, setDeleteProduct] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [editProduct, setEditProduct] = useState<ProductAddEditFormType | null>(
    null
  );

  const handleOnCloseAddEditModal = () => {
    setOpen(false);
    setEditProduct(null);
  };

  const onEditClick = (data: ProductAddEditFormType) => {
    setOpen(true);
    setEditProduct(data);
  };

  // delete product
  const submitDelete = async () => {
    try {
      if (deleteProduct?.id) {
        const response = await removeProduct(deleteProduct?.id ?? 0);
        toast.success(`${deleteProduct.name} deleted`);
        setProducts(
          products.filter((product) => product.id !== deleteProduct.id)
        );
        setDeleteProduct(null);
      }
    } catch (error) {
      toast.error("Product delete failed");
      console.log("Product delete failed", error);
    }
  };

  // create or update product
  const submitData = async (
    values: ProductAddEditFormType,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => {
    setSubmitting(true);

    try {
      const response = editProduct
        ? await updateProduct(values)
        : await createProduct(values);
      toast.success(`Product ${editProduct ? "Updated" : "Created"}`);
      resetForm();
      setOpen(false);

      //edit
      if (editProduct) {
        const clonedProducts = [...products];
        const productIndex = clonedProducts.findIndex(
          (product) => product.id === editProduct.id
        );
        if (productIndex !== -1) {
          clonedProducts[productIndex] = response;
          setProducts(clonedProducts);
        } else {
          toast.error("product cannot be updated");
        }
      } else {
        setProducts([...products, response]);
      }
      return response;
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Form submission error", error);
    }

    setSubmitting(false);
  };

  return {
    open,
    setOpen,
    submitData,
    onEditClick,
    handleOnCloseAddEditModal,
    editProduct,
    products,
    setProducts,
    deleteProduct,
    setDeleteProduct,
    submitDelete,
  };
};
