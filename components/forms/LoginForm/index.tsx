import { Formik } from "formik";
import * as Yup from "yup";
import { FormProps } from "./types";
import { Input } from "ui";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().min(6).max(20).required(),
});

export const LoginForm = ({ onSubmit }: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
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
          <div className="grid grid-cols-1 gap-5">
            <Input
              name="username"
              label="Username"
              placeholder="Username"
              onChange={handleChange}
              value={values.username}
              isDirty={touched.username}
              validationError={
                touched.username && errors.username
                  ? errors.username
                  : undefined
              }
            />
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
              isDirty={touched.password}
              validationError={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="py-4 px-7 bg-blue-500 rounded-lg w-full text-white hover:bg-blue-800 disabled:bg-gray-500"
            >
              Login
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};
