import { LoginFormTypes } from "@/components/forms/LoginForm/types";
import { UserType } from "@/types/userType";

export async function postLogin(body: LoginFormTypes): Promise<UserType> {
  const response = await fetch("https://dummyjson.com/auth/login", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Login Failed");
  }

  return response.json();
}
