import { Formik } from "formik";
import * as Yup from "yup";
import { FormProps, ProductAddEditFormType } from "./types";
import { Input, Typography } from "ui";

const initialValues: ProductAddEditFormType = {
  title: "",
  price: 0,
  rating: 0,
  stock: 0,
  // thumbnail: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  price: Yup.number().min(0).required(),
  rating: Yup.number().min(0).required(),
  stock: Yup.number().min(0).required(),
  // thumbnail: Yup.string().min(6).max(20),
});

export const ProductAddEditForm = ({ onSubmit, product }: FormProps) => {
  return (
    <Formik
      initialValues={product ?? initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <Input
                name="title"
                label="title"
                placeholder="title"
                onChange={handleChange}
                value={values.title}
                isDirty={touched.title}
                validationError={
                  touched.title && errors.title ? errors.title : undefined
                }
              />
            </div>
            <Input
              name="price"
              label="price"
              type="number"
              placeholder="price"
              onChange={handleChange}
              value={values.price}
              isDirty={touched.price}
              validationError={
                touched.price && errors.price ? errors.price : undefined
              }
            />

            <Input
              name="rating"
              label="rating"
              type="number"
              placeholder="rating"
              onChange={handleChange}
              value={values.rating}
              isDirty={touched.rating}
              validationError={
                touched.rating && errors.rating ? errors.rating : undefined
              }
            />

            <Input
              name="stock"
              label="stock"
              type="number"
              placeholder="stock"
              onChange={handleChange}
              value={values.stock}
              isDirty={touched.stock}
              validationError={
                touched.stock && errors.stock ? errors.stock : undefined
              }
            />
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-5 py-2 px-2.5 bg-blue-500 rounded-lg w-full text-white hover:bg-blue-800 disabled:bg-gray-500"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </Formik>
  );
};
