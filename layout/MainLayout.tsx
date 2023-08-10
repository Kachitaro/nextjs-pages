import { Fragment, PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <h1>Layout</h1>
      {children}
    </Fragment>
  );
}
