import { UserDetails } from "@/components/layout/UserDetails";

export default function SignedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <UserDetails />
      {children}
    </div>
  );
}
