export type TypographyProps = {
  children: string | React.ReactNode | undefined;
  size?: "xl" | "large" | "medium" | "small";
  weight?: "bold" | "semibold" | "medium" | "normal";
  variant?: "dark" | "medium" | "lightGray" | "white" | "noStyle";
  className?: string;
  center?: boolean;
};
