import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-[1216px] overflow-hidden px-5 sm:px-0">
      {children}
    </div>
  );
};
