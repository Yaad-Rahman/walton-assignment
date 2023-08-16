import React, { useEffect, useState } from "react";

export default function ClientRender({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <React.Fragment>
      {isClient ? (
        children
      ) : (
        <div className="mt-5 flex justify-center">Loading...</div>
      )}
    </React.Fragment>
  );
}
