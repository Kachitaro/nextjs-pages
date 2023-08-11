import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AppWithLayout from "@/layout/AppWithLayout";
import { Fragment } from "react";

function App(props: any) {
  return (
    <Fragment>
      <AppWithLayout {...props} />
    </Fragment>
  );
}
export default App;
