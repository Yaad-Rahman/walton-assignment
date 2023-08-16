"use client";
import { UserType } from "@/types/userType";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Typography } from "ui";

export const UserDetails = () => {
  const user = Cookies.get("user");
  const parsedUser: UserType = JSON.parse(user ?? "");

  const handleLogout = () => {
    Cookies.remove("user");
    window.location.href = "/login";
  };

  return (
    <div className="w-full px-20 py-10 flex justify-end">
      <div className="flex items-center gap-3">
        <img
          src={parsedUser.image}
          alt="user"
          className="w-12 h-12 object-cover rounded-full"
        />
        <div>
          <Typography weight="bold">{parsedUser.username}</Typography>
          <Typography size="small" variant="medium">
            {parsedUser.email}
          </Typography>
        </div>
        <button
          onClick={() => handleLogout()}
          className="bg-gray-200 hover:bg-gray-500 hover:text-white rounded-full p-2"
        >
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
