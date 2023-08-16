export type InputProps = {
  name: string;
  placeholder?: string;
  children?: React.ReactNode | undefined;
  type?: "text" | "password" | "number";
  label?: string | undefined;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  value?: string | number;
  readOnly?: boolean;
  validationError?: string;
  isDirty?: boolean;
  transparent?: boolean;
  startIcon?: JSX.Element | undefined;
};
