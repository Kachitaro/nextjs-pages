import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Fragment, PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
