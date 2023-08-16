import { ProductAddEditFormType } from "@/components/forms/ProductAddEditForm/types";
import { ProductGetResponse, ProductType } from "@/types/productType";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export async function getAllProducts(): Promise<ProductGetResponse> {
  const response = await fetch(`${baseurl}/products`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Product fetch failed");
  }

  return response.json();
}

export async function createProduct(body: any): Promise<ProductType> {
  const response = await fetch(`${baseurl}/products/add`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("product create failed");
  }

  return response.json();
}

export async function updateProduct(
  body: ProductAddEditFormType
): Promise<ProductType> {
  const requestBody = { ...body };
  delete requestBody.id;
  const response = await fetch(`${baseurl}/products/${body.id}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error("product update failed");
  }

  return response.json();
}

export async function removeProduct(deleteId: number): Promise<ProductType> {
  const response = await fetch(`${baseurl}/products/${deleteId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("product delete failed");
  }

  return response.json();
}
