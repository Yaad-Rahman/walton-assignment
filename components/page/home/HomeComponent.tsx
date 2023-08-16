"use client";

import { Container } from "@/components/layout/Container";
import { Typography } from "ui";
import { ProductsTable } from "./ProductsTable";
import { ProductGetResponse } from "@/types/productType";
import { useHome } from "@/hooks/useHome";
import { AddEditModal } from "./AddEditModal";
import ClientRender from "@/helpers/ClientRender";
import { useEffect } from "react";
import { DeleteModal } from "./DeleteModal";

export const HomeComponent = ({
  productsData,
}: {
  productsData: ProductGetResponse;
}) => {
  const {
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
  } = useHome();

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  return (
    <div>
      <Container>
        <div className="p-8 rounded-lg bg-gray-100 shadow-lg">
          <div className="flex items-center justify-between">
            <Typography size="xl" weight="bold">
              Product List
            </Typography>
            <button
              onClick={() => setOpen(true)}
              className="px-2.5 py-2 w-fit bg-blue-400 hover:bg-blue-600 text-white rounded-lg"
            >
              Add Product
            </button>
          </div>
          <div className="mt-5">
            <ProductsTable
              onDeleteClick={(data) => setDeleteProduct(data)}
              onEditClick={onEditClick}
              products={products}
            />
          </div>
        </div>
      </Container>

      {/* add/edit/delete modal   */}
      <ClientRender>
        <AddEditModal
          product={editProduct}
          onSubmit={submitData}
          isOpen={open}
          onClose={handleOnCloseAddEditModal}
        />

        <DeleteModal
          deleteProduct={deleteProduct}
          onDelete={submitDelete}
          isOpen={deleteProduct ? true : false}
          onClose={() => setDeleteProduct(null)}
        />
      </ClientRender>
    </div>
  );
};
