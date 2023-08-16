"use client";

import { LoginForm } from "@/components/forms/LoginForm";
import { Typography } from "ui";
import ClientRender from "@/helpers/ClientRender";
import { useLogin } from "@/hooks/useLogin";

export const LoginComponent = () => {
  const { handleSubmit } = useLogin();
  return (
    <div className="flex justify-center w-full min-h-screen items-center">
      <div className="p-10 shadow-lg">
        <ClientRender>
          <Typography size="xl" center className="mb-10" weight="bold">
            Assignment Login
          </Typography>
          <LoginForm onSubmit={handleSubmit} />
        </ClientRender>
      </div>
    </div>
  );
};
