import { ProductAddEditFormType } from "@/components/forms/ProductAddEditForm/types";
import { ProductType } from "@/types/productType";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export const ProductsTable = ({
  products,
  onEditClick,
  onDeleteClick,
}: {
  products: ProductType[];
  onEditClick: (data: ProductAddEditFormType) => void;
  onDeleteClick: (data: { id: number; name: string }) => void;
}) => {
  return (
    <table className="table-fixed border-separate border-spacing-5 w-full">
      <thead className="font-bold">
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="text-gray-600">
        {products &&
          products.length > 0 &&
          products
            .sort((a, b) => b.id - a.id)
            .map((product) => (
              <tr key={product.id}>
                <td className="flex justify-center">
                  <img
                    src={product.thumbnail ?? "/placeholder.jpg"}
                    alt="thumbnail"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="text-center">{product.title}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center">{product.rating}</td>
                <td className="text-center">{product.stock}</td>
                <td className="flex gap-2 items-center justify-center">
                  <button
                    onClick={() => onEditClick({ ...product, id: product.id })}
                    className="p-1 bg-gray-400 hover:bg-gray-600 rounded-full text-white"
                  >
                    <PencilIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      onDeleteClick({
                        id: product.id,
                        name: product.title,
                      })
                    }
                    className="p-1 bg-red-400 hover:bg-red-600 rounded-full text-white"
                  >
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};
