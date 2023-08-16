export type LoginFormTypes = {
  username: string;
  password: string;
};

export type FormProps = {
  onSubmit: (
    values: LoginFormTypes,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => void;
};
