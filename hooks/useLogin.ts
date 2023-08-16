import { postLogin } from "@/api/loginApi";
import { LoginFormTypes } from "@/components/forms/LoginForm/types";
import { UserType } from "@/types/userType";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useLogin = () => {
  const router = useRouter();

  const setUser = (user: UserType) => {
    Cookies.set("user", JSON.stringify(user));
  };

  const handleSubmit = async (
    values: LoginFormTypes,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => {
    setSubmitting(true);
    try {
      const response = await postLogin(values);
      toast.success("login successfull");
      Cookies.set("user", JSON.stringify(response));
      router.push("/");
      resetForm();
    } catch (error) {
      toast.error("login failed");
      console.log("Form submission error", error);
    }

    setSubmitting(false);
  };

  return { setUser, handleSubmit };
};
