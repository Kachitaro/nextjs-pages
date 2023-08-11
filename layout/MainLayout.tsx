import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { Fragment, PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <NavigationBar />
      {children}
      <Footer />
    </Fragment>
  );
}
