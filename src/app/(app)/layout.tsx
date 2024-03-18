import React from "react";
import Footer from "./_component/footer";

type Props = {
  children: Readonly<React.ReactNode>;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="h-full">
      {children}
      <Footer />
    </div>
  );
}
